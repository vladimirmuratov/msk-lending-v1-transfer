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
                    fontSize: {xs: 16, sm: 32, md: 48},
                    fontWeight: 600,
                    color: 'var(--black)',
                    position: 'absolute',
                    top: '30%',
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
                    sx={{
                        position: 'absolute',
                        top: '60%',
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
                    fontSize: 38,
                    fontWeight: 600
                }}>{phoneNumber}</Typography>
            }

        </Box>
    )
}
