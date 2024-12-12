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
                        sx={{color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '28px', sm: '34px' }, fontWeight: 500 }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> специализируется на оказании поддержки при госпитализации по Москве и Московской области:
                полное владение информацией об элитных клиниках, врачах-специалистах и стоимости размещения пациентов —
                от отдельных палат до VIP условий.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Знаем все нюансы выбора стационара исходя из конкретного медицинского профиля: определяя наиболее
                подходящие учреждения для вашей нужды, обеспечивая безупречное госпитализирование. Даже в ситуациях
                отказа от других клиник мы оперативно находим решения.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Особое внимание уделяем пожилым пациентам — учитываем их специфические требования и предлагает
                постоянное сопровождение 24/7, включая выходные дни для обеспечения максимального комфорта и
                безопасности.
            </Typography>
        </Box>
    );
};
