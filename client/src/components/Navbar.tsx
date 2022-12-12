import Mlink from '@mui/material/Link'
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
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Mlink href='../' underline='none' color='white'>
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
          </Mlink>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Mlink
              href='../viewpost'
              underline='none'
              sx={{ marginRight: '20px' }}
            >
              <Button startIcon={<VisibilityIcon />} sx={{ color: 'white' }}>
                ViewPost
              </Button>
            </Mlink>
            <Mlink href='../createpost' underline='none'>
              <Button startIcon={<PostAddIcon />} sx={{ color: 'white' }}>
                Create Post
              </Button>
            </Mlink>
          </Box>
        </div>
        <div>
          <IconButton size='large' color='inherit' edge='end'>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
