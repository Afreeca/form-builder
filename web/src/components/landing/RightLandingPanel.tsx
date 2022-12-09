import { Box, Typography } from '@mui/material'

export const RightLandingPanel = () => {
 
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems='center'
      sx={{ padding: '24px' }}
    >
      <Box display="flex" flexDirection="row" my={5}>
        <Box
          sx={{
            width: 404,
            height: 504,
            display: 'flex',
            alignItems:'center',
            backgroundImage: `url(/assets/avatar-computer.png)`,
            backgroundSize: '100% 100%',
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>
      “The only way to do great work is to love what you do.” – Steve Jobs
      </Typography>
    </Box>
  )
}

