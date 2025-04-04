import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
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
                Почему мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> помогает с госпитализацией
                в Москве и области, обеспечивая доступ к ведущим клиникам, специалистам и
                оптимальным условиям размещения — от стандартных палат до VIP.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Мы подбираем стационар по медицинскому профилю, гарантируя быстрое и беспроблемное оформление, даже если
                другие клиники отказали.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Особое внимание — пожилым пациентам: <Box component="span"
                                                          sx={{ color: 'var(--red)', fontWeight: 600 }}>круглосуточное
                сопровождение</Box>, учет всех потребностей и комфорт в
                любой день недели.
            </Typography>
        </Box>
    );
};
