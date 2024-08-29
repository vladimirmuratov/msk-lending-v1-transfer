import {Box, IconButton, Link, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {ContactBanner} from '@/components/ContactBanner'
import {phoneNumber} from '@/config'

export const MobileHeader = ({toggleDrawer, isMobile}) => {
    return (
        <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1}}>

            <ContactBanner isMobile={isMobile}/>

            <Box component="header"
                 sx={{
                     backgroundColor: 'var(--main-color)',
                     paddingY: '8px',
                     paddingX: '12px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                 }}>
                <Link
                    href="/"
                    sx={{
                        textDecoration: 'none',
                        color: 'var(--white)'
                    }}
                >
                    {/*<img className="logo" src="/images/logo-white.png" alt="logo"/>*/}
                    <Typography
                        sx={{
                            fontSize: 18,
                            fontWeight: 600,
                        }}
                    >МСК</Typography>
                </Link>

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
                                fontSize: 18,
                                fontWeight: 600,
                                textAlign: 'center',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {phoneNumber}
                        </Typography>
                    </Link>
                </Box>

                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon sx={{color: '#fff'}}/>
                </IconButton>
            </Box>
        </Box>
    )
}
