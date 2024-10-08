import {Box, Typography} from '@mui/material'

export const CoordinatorBlock = () => (
    <Box
        component="section"
        sx={{
            paddingX: '12px',
            paddingY: {xs: '25px', sm: '50px'},
        }}
    >
        <Typography
            variant="h4"
            sx={{
                marginBottom: '20px',
                fontSize: {xs: '28px', sm: '34px'},
                fontWeight: 500,
                textAlign: 'center',
                color: 'var(--main-color)'
            }}
        >
            <Box component='span' sx={{fontWeight: 600}}>МСК-Групп</Box>
            <br/>
            Официальный координатор по госпитализации в федеральные медицинские учреждения г.Москвы
        </Typography>
        <Typography
            component="p"
            sx={{
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center'
            }}
        >
            При обращении в сервис <Box component='span' sx={{fontWeight: 600}}>МСК-Групп</Box> - все расчеты ведутся по официальным ценам с конкретной медицинской
            организацией
        </Typography>
    </Box>
)
