import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export const LeftLandingPanel = () => {
  const router = useRouter()
  const handleGoToDashboard = () =>  router.push(`dashboard/`)

  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="h4" mb={5}>
      Start managing your forms
    </Typography>
    <Button
      data-testid="go-to-dashboard"
      size="large"
      type="submit"
      variant="contained"
      sx={theme => ({
        color: theme.palette.primary.main,
        background: theme.palette.common.white,
        fontWeight: 'bolder'
      })}
      onClick={handleGoToDashboard}
    >
      Go To Dashboard
    </Button>
  </Box>
  )
}
