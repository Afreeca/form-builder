import { Grid } from '@mui/material'
import { LeftLandingPanel } from '../components/landing/LelftLandingPanel'
import { RightLandingPanel } from '../components/landing/RightLandingPanel'

export default function LandingPage() {
  return (
    <Grid container>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        sx={theme => ({
          height: '100vh',
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        })}
      >
        <LeftLandingPanel />
      </Grid>
      <Grid
        item
        md={6}
        display={{ xs: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
      >
        <RightLandingPanel />
      </Grid>
    </Grid>
  )
}
