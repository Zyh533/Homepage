import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

import email from "../assets/image/email.png";
import phone from "../assets/image/phone.png";
import location from "../assets/image/location.png";

const useStyles = makeStyles(theme => createStyles({
    ContactView: {
        fontFamily: "microsoft雅黑"
    },
    content: {
        margin: "15px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contactItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: 7
    },
    icon: {
        width: 30,
        height: 30,
    },
    verticalLine: {
        height: 30,
        width: 2,
        backgroundColor: "#b6b6b6",
        margin: "0 8px"
    },
    QRCode: {
        width: 150,
        height: 150,
        margin: 5
    }
}));

const ContactView = () => {
    const classes = useStyles();
    return <div id={"Contact"} className={classes.ContactView}>
        <Title title={"Contact"} subTitle={"welcome to contact with me"}/>
        <div className={classes.content}>
            <div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={email}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Email Me</div>
                        <div>zhouyuhua@zju.edu.cn / Sizer533@16.com</div>
                    </div>
                </div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={phone}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Call Me</div>
                        <div>(+86)159-8881-6183</div>
                    </div>
                </div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={location}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Find Me</div>
                        <div>Hangzhou Zhejiang, China</div>
                    </div>
                </div>
            </div>
            <div>
                <img className={classes.QRCode}/>
                <img className={classes.QRCode}/>
                <img className={classes.QRCode}/>
                <img className={classes.QRCode}/>
            </div>
        </div>
    </div>
}

export default ContactView;
