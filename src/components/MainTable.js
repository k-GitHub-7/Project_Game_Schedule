import React, { useState, useRef, Fragment } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

function MainTable(props) {
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    let campaign = props.campaign;
    console.log("campaign ", campaign);
    let monthNames = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let upcomingList = [];
    let pastList = [];
    let liveList = [];

    props.data.filter((item) => {

        let fullDate = new Date(item.createdOn);
        let date = fullDate.getDate();
        let month = monthNames[fullDate.getMonth()];
        let year = fullDate.getFullYear();

        let currFullDate = new Date();
        let fullDateDiff = new Date(currFullDate - fullDate).getTime();
        let dayDiff = Math.abs(parseInt(fullDateDiff / (1000 * 60 * 60 * 24)));
        let suffix = fullDateDiff > 0 ? "ago" : fullDateDiff < 0 ? "ahead" : null;
        item.date = `${month} ${year}, ${date}`;
        item.dateSuffix = `${dayDiff} days ${suffix}`;
        fullDateDiff > 0 ? pastList.push(item) : fullDateDiff < 0 ? upcomingList.push(item) : fullDateDiff === 0 ? liveList.push(item) : null;
    })

    const [list, setList] = useState("upcomingList");
    campaign === "Live campaign" ? setList(liveList) : campaign === "Past campaign" ? setList(pastList) : campaign === "Upcoming campaign" ? setList(upcomingList) : null;
    function Popup(show) {

        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);

        return <Modal id="main-modal" dialogClassName="modal-dim" show={show} onHide={handleClose}>
            < Modal.Header >
                <img className="mod_img" style={{ backgroundImage: `url('../Assets/${item.image_url}')` }}
                /><span className="mod__desc"><span className="mod__title">{item.name}</span><br />{item.region}</span>
            </Modal.Header >
            <Modal.Body>
                <span className="modal__price">{"Pricing"}</span><br />
                <span className="modal__sub">{"1 Week - 1 Month"}</span><span className="dollar__price">$ {item.val[0].toFixed(2)}</span><br />
                <span className="modal__sub">{"6 Months"}</span><span className="dollar__price">$ {item.val[1].toFixed(2)}</span><br />
                <span className="modal__sub">{"1 Year"}</span><span className="dollar__price">$ {item.val[2].toFixed(2)}</span>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" className="close__btn" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal >
    }
    return !campaign ? <h2 className="select__campaign">Please select a campaign</h2> :
        <Fragment><table className="table">
            <thead>
                <tr>
                    <th scope="col">
                        {"date"}</th>
                    <th scope="col">{"campaign"}</th>
                    <th scope="col">{"view"}</th>
                    <th scope="col">{"actions"}</th><th scope="col">{""}</th><th scope="col">{""}</th>
                </tr>
            </thead>
            <tbody>
                    { 
                    
                    upcomingList.map((item, key) => {

                        return <tr>
                            <td className="date">
                                {item.date}<br />
                                {item.dateSuffix}
                            </td>
                            <td>
                                <img style={{ backgroundImage: `url('../Assets/${item.image_url}')` }} className="mod_img" />
                                <span className="second_col_name">{item.name}</span><br />
                                <span className="region">{item.region}</span>
                            </td>
                            <td
                                onClick={() => { setShow(true); setItem(item) }}><img src={'../Assets/price.png'} />View&nbsp;Pricing</td>
                            <td><span><img src={'../Assets/file.png'} />CSV</span></td><td><span><img src={'../Assets/stats.png'} />Report</span></td><td><span><img src={'../Assets/calendar.png'} />Schedule&nbsp;again</span></td>
                        </tr>

                    })
                }
            </tbody>
            {show && <Popup show={show} />}
        </table>

        </Fragment>

}

export default MainTable;