import React, { useState, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MainTable from './MainTable';
import data from './DataFile';
// import Languages
import English from '../Translation/en.json';
import German from '../Translation/de.json';

export default function MainBody() {

    const header = "Manage Campaigns";
    const upcoming = "Upcoming Campaigns";
    const live = "Live Campaigns";
    const past = "Past Campaigns";
    const [campaign, setCampaign] = useState("");
    const [lang, setLang] = useState("English");


    const SubMenu = (props) => {
        return <Fragment>
        <h1 className="top-header">{header}</h1>
            <Navbar className="navbar__submenu">
                <Nav>
                    <Nav.Link href="#home" className="sub__menu" onClick={()=>{setCampaign("upcomingCampaigns")}}>{upcoming}</Nav.Link>
                    <Nav.Link href="#features" className="sub__menu" onClick={()=>{setCampaign("liveCampaigns")}}>{live}</Nav.Link>
                    <Nav.Link href="#pricing" className="sub__menu" onClick={()=>{setCampaign("pastCampaigns")}}>{past}</Nav.Link>
                </Nav>
            </Navbar> <button href="#" className="lang" onClick={()=>setLang("English")}>{"en"}</button><button href="#" className="lang" onClick={()=>setLang("German")}>{"de"}</button>
        </Fragment>
    }

    return <div className="container-fluid">
        <SubMenu  languaged={lang} />
        <MainTable data={data.body} language={lang} campaign={campaign}/>
    </div>;
}