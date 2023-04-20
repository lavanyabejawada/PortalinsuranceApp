import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import InputBase from '@mui/material/InputBase';
import Settings from '@mui/icons-material/Settings';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function  PersistentDrawerLeft () {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Search id="searchIcon">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            Dashboard
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <GridViewIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CatchingPokemonIcon />
              </ListItemIcon>
              <ListItemText primary="Product Categories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InsertChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Lead Management" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Campaigns" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Applications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Contracts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon/>
              </ListItemIcon>
              <ListItemText primary="claims" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <TwitterIcon/>
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>



      <tog />
      {/* calling toggler switch */}

      <List>
        {/* Dark Mode */}
        {/* <SearchAppBar/> */}
        {/* <MyApp /> */}
      </List>
      <Divider />
     
    </Box>
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Insurance is a way to manage your risk. When you buy insurance, you purchase protection against unexpected financial losses. 
          The insurance company pays you or someone you choose if something bad happens to you.
        </Typography>
        <Typography paragraph>
          It is a contract or agreement under which one party agrees in return for a consideration to pay a specified amount of money to another party to make a loss, damage or injury to something of value in which the insured has a pecuniary interest as a result of some uncertain event.
          Different types of general insurance include motor insurance, health insurance, travel insurance, and home insurance. A general insurance policy pays for the losses that are incurred by the insured during the period of the policy.
        </Typography>
      </Main>
    </Box>
  );
}