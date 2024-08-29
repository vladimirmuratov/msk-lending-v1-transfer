import {Box, IconButton, Typography, Link} from '@mui/material'
import {links, phoneNumber} from '@/config'
import MenuIcon from '@mui/icons-material/Menu'
import {ContactBanner} from '@/components/ContactBanner'
import {useCallback, useEffect, useRef, useState} from 'react'
import {BaseLink} from '@/components/base/BaseLink'

export const DesktopHeader = () => {
    const scrollContainer = useRef()
    const [position, setPosition] = useState('relative')

    const onScroll = useCallback(() => {
        const {top, bottom} = scrollContainer.current.getBoundingClientRect()
        if (bottom <= 0) {
            setPosition('fixed')
        } else {
            setPosition('relative')
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <Box
            ref={scrollContainer}
            sx={{position: 'relative', zIndex: 1}}
        >

            <ContactBanner/>

            <Box
                component="header"
                className="container"
                sx={{
                    position: position,
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: 'var(--white)',
                    paddingY: '12px',
                    paddingX: {xs: '24px', sm: '32px'},
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    boxShadow: '0 2px 4px lightgray'
                }}>
                <Link href="/">
                    <img className="logo" src="/images/logo-msk.webp" alt="logo"/>
                </Link>

                {/*<Box component="nav" sx={{display: {xs: 'none', sm: 'flex'}, gap: {sm: '10px', md: '15px'}}}>
                    {links.map((link) => <BaseLink key={link.id} {...link}/>)}
                </Box>*/}

                <Box>
                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            fontSize: 20,
                            fontWeight: 600,
                            textAlign: 'center'
                        }}
                    >
                        Официальный координатор по госпитализации в федеральные медицинские учреждения г.Москвы
                    </Typography>
                </Box>

                <Box>
                    <Link
                        href={`tel:${phoneNumber}`}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'var(--red)',
                                fontSize: 20,
                                fontWeight: 600,
                                textAlign: 'center',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {phoneNumber}
                        </Typography>
                    </Link>
                </Box>

                {/*<IconButton sx={{visibility: 'hidden'}}>
                    <MenuIcon/>
                </IconButton>*/}
            </Box>
        </Box>
    )
}
