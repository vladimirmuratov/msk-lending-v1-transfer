import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '28px', sm: '34px' },
                            fontWeight: 500
                        }}>
                О нас
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная Компания
                    (МСК)</Box> организует лечение в ведущих московских клиниках и безопасную перевозку пациентов.
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                Мы обеспечиваем быстрые и комфортные решения для <Box component="span" sx={{
                color: 'var(--red)',
                fontWeight: 600
            }}>госпитализации</Box> и <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>транспортировки</Box>, ставя
                здоровье
                клиентов в приоритет.
            </Typography>
        </Box>
    );
};
