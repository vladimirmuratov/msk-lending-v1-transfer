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
                Задачи, которые мы берем на себя:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Подбор идеальной клинической базы для каждого случая</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Анализ и надзор за качеством предоставляемых медицинских услуг с оценкой их стоимости</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Непрерывная врачебная поддержка пациентов</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Перевод пациента в другую больницу</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Индивидуализированный, комплексный подход к лечению</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography variant='h3' sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Полномасштабное юридическое сопровождение</Typography>
            </Box>
        </Box>
    )
}
