import * as React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { 
    AppBar
  , Button
  , createStyles
  , Drawer
  , Dialog
  , DialogActions
  , DialogContent
  , DialogContentText
  , DialogTitle
  , Divider
  , IconButton
  , List
  , ListItem
  , ListItemIcon
  , ListItemText
  , Menu
  , MenuItem 
  , Toolbar
  , Theme
  , Typography
  , WithStyles
  , withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CategoryIcon from '@material-ui/icons/Category';
import SkillList from './Container';

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        height: '100vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    main: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar
});

/**
 * メニューレイアウトのpopsです。
 */
export interface MenuLayoutProps extends WithStyles<typeof styles> {}

/**
 * メニューレイアウトコンポーネントです。
 */
class MenuLayout extends React.Component<MenuLayoutProps, {}> {
    state = {
        open: false,
        logoutOpen: false,
        menu: 'SkillList',
        anchorEl: null
    };

    /**
     * ドロワーオープンハンドラ用プロパティです。
     */
    private handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    /**
     * ドロワークローズハンドラ用プロパティです。
     */
    private handleDrawerClose = () => {
        this.setState({ open: false });
    };

    /**
     * メニュークリックハンドラ用プロパティです。
     */
    private handleMenuClick = (name: string) => () => {
        this.setState({ menu: name });
    };

    /**
     * ログアウトオープンハンドラ用プロパティです。
     */
    private handleLogoutOpen = () => {
        this.setState({ logoutOpen: true });
    };
        
    /**
     * ログアウトクローズハンドラ用プロパティです。
     */
    private handleLogoutClose = () => {
        this.setState({ logoutOpen: false });
    };
    
    private handleAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    private handleAccountMenuClose = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    /**
     * コンポーネントをレンダリングします。
     */
    public render(): JSX.Element {
        const { classes } = this.props;
        const { menu, anchorEl } = this.state;
        const accountOpen = Boolean(anchorEl);
        const iconAriaOwns = accountOpen ? 'menu-appbar' : undefined;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen}
                                className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>サンプル</Typography>
                            <IconButton aria-owns={iconAriaOwns} aria-haspopup="true" onClick={this.handleAccountMenu} color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Menu id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={accountOpen} onClose={this.handleAccountMenuClose}>
                                <MenuItem onClick={this.handleAccountMenuClose}>設定</MenuItem>
                                <MenuItem onClick={this.handleLogoutOpen}>ログアウト</MenuItem>
                            </Menu>
                            <Dialog
                                open={this.state.logoutOpen}
                                onClose={this.handleLogoutClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                >
                                <DialogTitle id="alert-dialog-title">{"ログアウトしますか？"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                    ログアウトする場合は、「はい」をクリックしてください。
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleLogoutClose} color="primary">
                                    いいえ
                                    </Button>
                                    <Button color="primary" autoFocus>
                                    はい
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" classes={{
                            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}>
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <div>
                                <ListItem button onClick={this.handleMenuClick('SkillList')}>
                                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                                    <ListItemText>スキル</ListItemText>
                                </ListItem>
                            </div>
                        </List>
                        <Divider />
                    </Drawer>
                    <main className={classes.main}>
                        <div className={classes.appBarSpacer} />
                        {menu === 'SkillList' && <SkillList/>}
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(MenuLayout);