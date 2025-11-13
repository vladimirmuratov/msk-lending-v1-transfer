import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

const PhoneBlock = ({style = {}, text = 'Запись на консультацию'}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: { xs: '25px', sm: '50px' },
                marginX: { xs: '10px', lg: 0 },
                ...style
            }}
        >
            <Typography
                sx={{
                    display: 'block',
                    marginBottom: '10px',
                    color: 'var(--red)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    textWrap: 'balance',
                    fontWeight: 500,
                    fontSize: { xs: 22, sm: 28, md: 32 },
                }}
            >
                {text}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                }}
            >
                <img
                    src="/images/icons/phone.svg"
                    alt="phone"
                    style={{ width: 40, height: 40, }}
                />
                <Link href={`tel:${phoneNumber}`}
                      sx={{
                          textDecoration: 'underline !important',
                          color: 'var(--red)',
                      }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 22, sm: 28, md: 32 },
                            fontWeight: 600,
                            color: 'var(--red)',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.1,
                            textAlign: 'center',
                        }}
                    >
                        {phoneNumber}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
};

export default React.memo(PhoneBlock);
