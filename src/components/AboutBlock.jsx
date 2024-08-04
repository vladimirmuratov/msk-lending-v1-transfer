import {Box, Typography} from '@mui/material'

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '32px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>О
                нас</Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '10px'}}>
                Московская Сервисная Компания (МСК-Групп) уже 10 лет оказывает услуги платной госпитализации и
                транспортировки
                пациентов в ведущие клиники Москвы в круглосуточном режиме.
            </Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '10px'}}>
                Частная служба скорой помощи <Box component="span" sx={{fontWeight: 600}}>МСК-Групп</Box> помогает
                транспортировать маломобильного пациента из одного
                медцентра в другой как в пределах одного города или области, так и по всей территории нашей огромной
                страны. Мы придем на помощь, если вам экстренно нужно госпитализировать родственника в удаленную клинику
                или требуется отправить близкого человека на плановое лечение в столичный медицинский центр.
                <br/>
                <Box component="span" sx={{fontWeight: 600}}>Круглосуточно. Оперативно. Доступно</Box>
            </Typography>

            <Typography component="p" sx={{fontSize: 20}}>
                Наша компания работает на базе ФГБУ "Объединенная больница с поликлиникой" Управления Делами Президента
                РФ.
            </Typography>
        </Box>
    )
}
