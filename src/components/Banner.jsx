'use client'

import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

export const Banner = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        }

    }, [])

    return (
        <Box component="figure" className="banner-container" sx={{position: 'relative'}}>
            <img className="banner" src="/images/images-for-landings/7.webp" alt="banner"/>
            <Box sx={{
                position: 'absolute',
                top: {xs: '10%', sm: '20%'},
                left: '5%',
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 32, sm: 58, md: 62},
                        lineHeight: 1.1,
                        fontWeight: 600,
                        color: 'var(--black)',
                        textShadow: '0px 4px 4px lightgray',
                        marginBottom: {xs: '5px', sm: '10px'}
                    }}>
                    Перевод<br/>
                    в другую<br/>
                    больницу
                </Typography>

                {isMobile
                    ? <Button
                        onClick={() => router.push(`tel:${phoneNumber}`)}
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{
                            display: isMobile ? 'block' : 'none'
                        }}
                    >
                        Позвонить
                    </Button>
                    : <Typography sx={{
                        color: 'var(--red)',
                        display: isMobile ? 'none' : 'block',
                        fontSize: {xs: 16, sm: 32, md: 62},
                        fontWeight: 600
                    }}>{phoneNumber}</Typography>
                }
            </Box>
        </Box>
    )
}
