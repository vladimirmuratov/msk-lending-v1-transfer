import React from 'react';
import { Box, Link } from '@mui/material';
import Image from 'next/image';
import { email, maxLink, telegramLink } from '@/config';

const SocialBlock = ({ className = '' }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            className={className}
        >
            {/*<Link target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <Image
                    src="/images/social/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link
                target="_blank"
                href={maxLink}
                sx={{
                    transition: 'all 0.3s',
                    ':hover': {
                        transform: 'scale(1.1)',
                    }
                }}
            >
                <Image
                    src="/images/social/max.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link
                target="_blank"
                href={telegramLink}
                sx={{
                    transition: 'all 0.3s',
                    ':hover': {
                        transform: 'scale(1.1)',
                    }
                }}
            >
                <Image
                    src="/images/social/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            {/*<Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/images/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link
                href={`mailto:${email}`}
                sx={{
                    transition: 'all 0.3s',
                    ':hover': {
                        transform: 'scale(1.1)',
                    }
                }}
            >
                <Image
                    src="/images/social/email.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
        </Box>
    );
};

export default React.memo(SocialBlock);
