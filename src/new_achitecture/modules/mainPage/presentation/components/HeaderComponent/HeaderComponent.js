import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core";
// import { sidebar } from "..";
import css from "./HeaderComponent.module.css";
import {
    MAIN_ROUTE,
    CONTACTS_ROUTE,
    TRAVEL_TIPS,
} from "../../../../trip_search/domain/entites/utils/constants/constants";
import {useLocation} from 'react-router';
import {LogoHeader} from "./Logos/Logos";
import Nav from "./Nav/Nav";
import Sidebar from "./Sidebar/Sidebar";
import {buttonDataTravelTips} from "../../../../budgetTravelTips/presentation/FooterComponent/footerButtonsData";

const HeaderComponent = () => {
    const page_mode = useStatePath();
    return (
        <AppBar position="fixed">
            <Toolbar className={css.navbar}>
                <LogoHeader page_mode={page_mode}/>
                <Nav/>
            </Toolbar>
            <Sidebar page_mode={page_mode}/>
        </AppBar>
    );
}

export default HeaderComponent;

function useStatePath() {
    const {pathname} = useLocation();
    if (pathname === MAIN_ROUTE || pathname === CONTACTS_ROUTE || pathname === TRAVEL_TIPS ||
        buttonDataTravelTips.some(item => pathname.includes(item.to))) {
        return "CheapTrip";
    }
    return "TransferBuses";
}







