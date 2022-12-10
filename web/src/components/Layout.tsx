import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
      <Container fixed >
        <Stack sx={{ bgcolor: '#ececec', height: '100vh'}} gap={5}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div">
                Form Management Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ }}>
            {children}
          </Box>
        </Stack>
    </Container>
  )
}