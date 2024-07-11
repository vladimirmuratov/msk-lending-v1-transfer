'use client'
import {Montserrat} from 'next/font/google'
import {createTheme} from '@mui/material/styles'

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

const theme = createTheme({
    typography: {
        fontFamily: montserrat.style.fontFamily,
    },
})

export default theme
