import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: '20px',
    left: 'calc(100% - 40px)',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  list: {
    listStyle: 'none',
    fontFamily: 'Aventir',
  },
  listItem: {
    height: '30px',
  },
  anchorTag: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export default function PersistentDrawerRight({ device }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return device === 'phone' ? (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={clsx(open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <a className={classes.anchorTag} href="https://www.servicegeni.in/">
              HOME
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/doorstep"
            >
              DOORSTEP SERVICES
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/ecu"
            >
              ECU CODING & REPAIR
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/about-us"
            >
              ABOUT US
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/contact-us"
            >
              CONTACT
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/blogs"
            >
              BLOGS
            </a>
          </li>
          <li className={classes.listItem}>
            <a
              className={classes.anchorTag}
              href="https://www.servicegeni.in/viral-kindness"
            >
              VIRAL KINDNESS
            </a>
          </li>
        </ul>
        <Divider />
      </Drawer>
    </div>
  ) : null;
}
