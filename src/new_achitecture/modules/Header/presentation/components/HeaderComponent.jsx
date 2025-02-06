import React, {useState, MouseEvent} from 'react';
import {AppBar, Toolbar, Menu, MenuList, MenuItem, Box,} from "@material-ui/core";
import css from "./HeaderComponent.module.css";
import {useHistory, useLocation} from 'react-router';
import {
    CONTACTS_ROUTE,
    MAIN_ROUTE,
    PASSENGER_ROUTE, TRAVEL_TIPS,
} from "../../../trip_search/domain/entites/utils/constants/constants";
import {useStyles} from "../../../../general/MUI/useStyles";
import {Link, NavLink} from "react-router-dom";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from "@mui/material/IconButton";
import {ListItemText} from "@mui/material";

const Header = () => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorEl(null)
    }

    const closeHandler = path => {
        history.push(path);
        closeMenu();
    }

    return (
        <AppBar className={css.appbar} elevation={0}>
            <Toolbar className={css.navbar}>
                <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                    <NavLink className={css.logo} to={MAIN_ROUTE}>
                        <span className={css.logoTrip}>CheapTrip</span>
                    </NavLink>
                    <span className={css.sloganHeader}>
        <span className={css.sloganHeaderChilds}>Pay less, visit more!</span>
                    </span>
                </div>
                <nav className={css.nav}>
                    <Link
                        to={PASSENGER_ROUTE}
                        edge='end'
                        className={css.menuButton}
                    >
                        TransferBuses
                    </Link>
                    <Link
                        to={TRAVEL_TIPS}
                        edge='end'
                        className={css.menuButton}
                    >
                        Travel Tips
                    </Link>
                    <Link
                        to={CONTACTS_ROUTE}
                        edge='end'
                        className={css.menuButton}>
                        <ContactMailIcon/>
                    </Link>
                </nav>
                <Box className={css.burger}>
                    <IconButton onClick={openMenu} edge="end" color='inherit' aria-controls="simple-menu"
                                aria-haspopup="true">
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                        anchorEl={anchorEl}
                        keepMounted
                        // anchorOrigin={{vertical: null, horizontal: 'right'}}
                        // transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    >
                        <MenuList>
                            <MenuItem className={css.burgerText} button key={MAIN_ROUTE}>
                                <ListItemText
                                    primary={"Cheap Trip"}
                                    onClick={() => closeHandler(MAIN_ROUTE)}
                                />
                            </MenuItem>
                            <MenuItem className={css.burgerText} button key={TRAVEL_TIPS}><ListItemText
                                primary={"Travel Tips"}
                                onClick={() => closeHandler(TRAVEL_TIPS)}
                            /></MenuItem>
                            <MenuItem className={css.burgerText} button key={PASSENGER_ROUTE}>
                                <ListItemText
                                    primary={"TransferBuses"}
                                    onClick={() => closeHandler(PASSENGER_ROUTE)}
                                /></MenuItem>
                            <MenuItem className={css.burgerText} button key={CONTACTS_ROUTE}>
                                <ListItemText
                                    primary={"Contacts"}
                                    onClick={() => closeHandler(CONTACTS_ROUTE)}
                                />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;