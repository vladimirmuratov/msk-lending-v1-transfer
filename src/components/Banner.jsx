'use client'

import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import SocialBlock from '@/components/SocialBlock'

export const Banner = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(true)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        } else {
            setMobile(false)
        }

    }, [])

    return (
        <Box
            component="figure"
            sx={{
                position: 'relative',
                // marginTop: isMobile ? {xs: '110px', sm: '95px'} : 0,
                marginTop: isMobile ? { xs: '110px', sm: 0 } : 0,
                paddingBottom: isMobile ? { xs: '25px', sm: 0 } : 0
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: 'calc(var(--index) * 23)',
                        sm: 'calc(var(--index) * 23)',
                        md: 'calc(var(--index) * 23)',
                        lg: 'calc(var(--index) * 23)'
                    },
                    backgroundImage: `url(/images/images-for-landings/9.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: {xs: '10%', sm: '10%'},
                    left: '5%',
                }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'var(--main-color)',
                            fontSize: {xs: 22, sm: 40, md: 62},
                            lineHeight: 1,
                            fontWeight: 600,
                            textShadow: '2px 2px 2px white',
                            marginBottom: {xs: '5px', sm: '10px'},
                            textTransform: 'uppercase'
                        }}>
                        Перевод
                        <br/>
                        больного
                        <br/>
                        в другую больницу
                    </Typography>

                    {isMobile
                        ? (<Box
                            sx={{
                                display: 'inline'
                            }}
                        >
                            <Button
                                onClick={() => router.push(`tel:${phoneNumber}`)}
                                variant="contained"
                                color="error"
                                size="small"
                                sx={{
                                    display: isMobile ? 'block' : 'none'
                                }}
                            >
                                Позвонить
                            </Button>
                            <SocialBlock className="banner-social-mobile"/>
                        </Box>)
                        : <Typography
                            sx={{
                                color: 'var(--red)',
                                display: isMobile ? 'none' : 'block',
                                fontSize: {xs: 16, sm: 32, md: 62},
                                fontWeight: 600,
                                textShadow: '0px 4px 4px lightgray',
                            }}>{phoneNumber}</Typography>
                    }
                </Box>
            </Box>
        </Box>
    )
}
