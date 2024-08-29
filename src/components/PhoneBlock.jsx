import React from 'react'
import {Box, Link, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

const PhoneBlock = () => {
    return (
        <Box>
            <Link
                href={`tel:${phoneNumber}`}
                sx={{
                    textDecoration: 'none'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: '28px', sm: '34px'},
                        fontWeight: 600,
                        color: 'var(--red)',
                        textAlign: 'center',
                        transition: 'all 0.3s',
                        '&:hover': {
                            textShadow: '0px 4px 4px gray'
                        }
                    }}
                >{phoneNumber}</Typography>
            </Link>
        </Box>
    )
}

export default React.memo(PhoneBlock)
