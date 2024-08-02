import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import {directions} from '@/config'

export const DirectionsOfHospitalizationBlock = () => {
    return (
        <Box id='directions' sx={{scrollMarginTop: {xs: '120px', sm: '50px'}, paddingX: '32px', paddingY: {xs: '25px', sm: '50px'}, color: 'var(--black)'}}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>Направления госпитализации:</Typography>

            {directions.map(({id, label}) => (
                <Box key={id} sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                    <CheckIcon sx={{color: 'var(--green)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>{label}</Typography>
                </Box>
            ))}

        </Box>
    )
}
