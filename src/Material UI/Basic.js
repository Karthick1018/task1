import React from "react";
import { AppBar, Box, Button, ButtonGroup, Card, Checkbox, IconButton, InputBase, Menu, MenuItem, TextField, Toolbar, Typography, alpha, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Bootstrap = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand" href="#">Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item nav-link active">
                                Home
                            </li>
                            <li class="nav-item nav-link">
                                Link
                            </li>
                            <li class="nav-item dropdown nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">Action</li>
                                    <li class="dropdown-item">Another action</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li class="dropdown-item">Something else here</li>
                                </ul>
                            </li>
                            <li class="nav-item nav-link disabled">
                                Disabled
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <form style={{ display: 'grid', placeItems: 'center' }}>
                <h1>Form </h1>
                <div className='card  bg-info'>
                    <div className="p-5" style={{ backgroundColor: "red", borderTopRightRadius: 1000 }}  >
                        <div class="mb-3" >
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

const Mui = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
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
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                            <ButtonGroup aria-label="outlined primary button group">
                                <Button sx={{ borderRadius: 40, borderColor: 'white', bgcolor: "white" }}>Log in</Button>
                                <Button variant="outlined" sx={{ borderRadius: 40, borderColor: 'white', color: 'white' }}>sign in</Button>
                            </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <form className="App" style={{ display: 'grid', placeItems: ' center' }}>
                <h1>Form</h1>
                <Card sx={{ bgcolor: 'green' }} >
                    <Box sx={{ borderTopRightRadius: 1000, padding: 5, backgroundColor: "aqua" }}>
                        <div>
                            <TextField variant="outlined" color="secondary" label='Username' sx={{ bgcolor: 'white' }} />
                        </div><br />
                        <div>
                            <TextField variant="outlined" label='Password' sx={{ bgcolor: 'white' }} />
                        </div><br />
                        <div>
                            <Checkbox>check</Checkbox>
                            <label>Check me out</label>
                        </div>
                        <div>
                            <Button type="submit" variant="contained">Submit </Button>
                        </div>
                    </Box>
                </Card>
            </form>

        </>
    )
}

export default function Layout() {
    const box = {
        bootstrap: {
            width: 768,
            backgroundColor: '#b1b8a0',

        },
        mui: {
            width: 768,
            backgroundColor: '#cae3d1',
            minHeight: 735,
        }
    }
    const style = {
        display: 'flex',
        float: 'left',
        scroll: 'hidden',
    }
    return (
        <>
            <div style={style}>
                <div style={box.bootstrap}>
                    <Bootstrap />
                </div>
                <div style={box.mui}>
                    <Mui />
                </div>
            </div>
        </>
    )
}







