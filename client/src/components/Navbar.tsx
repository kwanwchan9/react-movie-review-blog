import Link from '@mui/material/Link'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PostAddIcon from '@mui/icons-material/PostAdd'
import VisibilityIcon from '@mui/icons-material/Visibility'

const Navbar = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link href='/' underline='none' color='white'>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              >
                <MenuIcon />
                <Typography
                  variant='h6'
                  component='div'
                  sx={{ flexGrow: 1, ml: 1 }}
                >
                  Home
                </Typography>
              </IconButton>
            </Link>
          </div>
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link
                href='/viewpost'
                underline='none'
                sx={{ marginRight: '20px' }}
              >
                <Button startIcon={<VisibilityIcon />} sx={{ color: 'white' }}>
                  ViewPost
                </Button>
              </Link>
              <Link href='/createpost' underline='none'>
                <Button startIcon={<PostAddIcon />} sx={{ color: 'white' }}>
                  Create Post
                </Button>
              </Link>
            </Box>
          </div>
          <div>
            <IconButton size='large' color='inherit' edge='end'>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
export default Navbar
