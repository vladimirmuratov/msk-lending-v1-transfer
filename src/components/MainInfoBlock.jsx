import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '32px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Причины перевода пациента из одной больницы в другую
            </Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '20px'}}>
                Перевод пациентов между медицинскими учреждениями является важным шагом для обеспечения наилучшего ухода
                и лечения. Вот несколько распространенных причин, по которым пациент может быть переведен из одной
                больницы в другую:
            </Typography>

            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Специализированное
                        лечение:</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Некоторые медицинские состояния требуют специфического лечения, которое может быть предоставлено
                    только в определенных специализированных клиниках или центрах экспертного ухода. Перевод пациента в
                    такие учреждения обеспечивает доступ к опытным специалистам и передовым методам лечения.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Необходимость дополнительных
                        медицинских услуг:</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Иногда пациенты требуют дополнительных процедур или операций, которые не могут быть выполнены в
                    текущем медицинском учреждении из-за отсутствия необходимого оборудования или опыта. Перевод в
                    другую больницу обеспечивает выполнение всех необходимых медицинских манипуляций.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Мультиспециальный
                        подход:</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Некоторые сложные медицинские случаи требуют координации усилий нескольких специалистов различных
                    медицинских направлений. Перевод в больницу с мультиспециализированным подходом помогает в
                    достижении комплексного ухода и оптимальных результатов лечения.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Второе мнение и
                        консультации:</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    В некоторых ситуациях пациенты и их семьи ищут второе мнение от других врачей или специалистов для
                    подтверждения диагноза или рекомендаций по лечению. Перевод в другую больницу может предоставить
                    возможность для консультаций с новыми экспертами и принятия информированного решения.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Улучшенные условия
                        ухода:</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Иногда перевод пациента может быть обусловлен не только медицинскими аспектами, но и качеством
                    обслуживания и ухода. Перевод в больницу с лучшими условиями пребывания и комфорта может
                    способствовать быстрому выздоровлению и общему благополучию пациента.
                </Typography>
            </Box>

            <Typography component="p" sx={{fontSize: 20}}>
                Каждый случай перевода уникален и требует индивидуального подхода. Медицинские специалисты всегда
                стремятся обеспечить наилучший результат для каждого пациента, учитывая их медицинские потребности и
                личные предпочтения.
            </Typography>
        </Box>
    )
}
