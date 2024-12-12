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
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>Московская Сервисная Компания
                    (МСК-Групп)</Box> предлагает полный спектр решений в сфере координации
                медицинского обслуживания: от
                организации пребывания пациентов в топовых московских клиниках до безопасной и оптимизированной
                перевозки между ними.
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>Цель</Box> — гарантировать
                доступность первоклассного медицинского ухода для каждого обратившегося,
                обеспечивая оперативное решение всех аспектов госпитализации и транспортировки. Наш главный принцип —
                приоритет здоровья и максимального комфорта наших заказчиков в каждом этапе взаимодействия с системой
                здравоохранения.
            </Typography>

            {/*<Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }}}>
                Наша компания работает на базе ФГБУ "Объединенная больница с поликлиникой" Управления Делами Президента
                РФ.
            </Typography>*/}
        </Box>
    );
};
