import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
            scrollMarginTop: {xs: '120px', sm: '50px'},
            paddingX: '12px',
            paddingY: {xs: '25px', sm: '50px'},
            color: 'var(--black)'
        }}
        >

            <Typography variant="h2" sx={{color: 'var(--main-color)', marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Наши задачи:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Подбор оптимальной клиники под конкретный случай</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Контроль качества медицинских услуг и их стоимости</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Круглосуточная врачебная поддержка</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Организация перевода в другую больницу</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Индивидуальный комплексный подход к лечению</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Полное юридическое сопровождение</Typography>
            </Box>
        </Box>
    )
}
