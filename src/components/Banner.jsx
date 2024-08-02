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
        <Box className="banner-container" sx={{position: 'relative'}}>
            <img className="banner" src="/images/banner2.jpg" alt="banner"/>
            <Typography
                variant="h4"
                sx={{
                    fontSize: {xs: 38, sm: 58, md: 62},
                    lineHeight: 1.1,
                    fontWeight: 600,
                    color: 'var(--black)',
                    position: 'absolute',
                    top: {xs: '10%', sm: '30%'},
                    left: '5%',
                    textShadow: '0px 4px 4px lightgray'
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
                        position: 'absolute',
                        top: {xs: '70%', sm: '80%', md: '70%', lg: '60%'},
                        left: '5%',
                        display: isMobile ? 'block' : 'none'
                    }}
                >
                    Позвонить
                </Button>
                : <Typography sx={{
                    color: 'var(--red)',
                    position: 'absolute',
                    top: '60%',
                    left: '5%',
                    display: isMobile ? 'none' : 'block',
                    fontSize: {xs: 16, sm: 32, md: 62},
                    fontWeight: 600
                }}>{phoneNumber}</Typography>
            }

        </Box>
    )
}
