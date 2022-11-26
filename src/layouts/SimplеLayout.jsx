import HeaderSimple from "../components/HeaderSimple/HeaderSimple";
import FooterSimple from "../components/FooterSimple/FooterSimple";
import { Outlet } from "react-router-dom";

function SimpleLayout() {
    return (
        <>
            <HeaderSimple />
            <Outlet />
            <FooterSimple />
        </>
    );
}

export default SimpleLayout;
