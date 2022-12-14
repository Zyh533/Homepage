import React, {useMemo} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {
    PaperClipOutlined,
    CodeSandboxOutlined,
    VideoCameraOutlined,
    GlobalOutlined,
    LinkOutlined,
    FundProjectionScreenOutlined
} from "@ant-design/icons";

const useStyles = makeStyles(theme => createStyles({
    PublicationItem: {
        height: 150,
        backgroundColor: "#f5f5f5",
        margin: "5px 0",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        fontFamily: "Montserrat",
        position: "relative",

        "&:hover > $year": {
            backgroundColor: "red",
            transition: "0.5s",
        }
    },
    teaser: {
        width: 250
    },
    content: {
        marginLeft: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 17,
        fontWeight: 600,
        marginBottom: 7
    },
    award: {
        color: "red",
        marginLeft: 5
    },
    author: {
        display: "flex",
        alignItems: "center",
        color: "#767676",

        "& > *": {
            marginRight: 5
        }
    },
    meAuthor: {
        fontWeight: 700,
        color: "#474747",
        fontSize: 15,
        textDecoration: "underline"
    },
    journal: {
        marginTop: 10,
        color: "#767676",
        fontStyle: "italic"
    },
    detail: {
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
    },
    link: {
        margin: "0 5px",
        color: "#86bdec",

        "& > *": {
            marginRight: 3
        }
    },
    year: {
        marginLeft: "auto",
        backgroundColor: "#000",
        color: "white",
        padding: "5px 15px",
        position: "absolute",
        right: 0,
        bottom: 0,
        transition: "0.5s",
        borderRadius: "0 0 5px 0"
    }
}));

interface PublicationItemProps {
    teaser: string,
    title: string,
    award: string,
    author: string,
    me: number,
    journal: string,
    year: string,
    links: any
}

const PublicationItem: React.FC<PublicationItemProps> = ({teaser, title, award, author, me, journal, year, links}) => {
    const classes = useStyles();
    const imgSrc = require("../assets/image/publication/" + teaser).default;
    const {pdf, website, video, presentation, cite, code} = links;
    const authorList = useMemo(() => {
        return author.split(",")
    }, [author])

    return <div className={classes.PublicationItem}>
        <img className={classes.teaser} src={imgSrc}/>
        <div className={classes.content}>
            <div className={classes.title}>
                <span>{title}</span>
                {award !== "" && <span className={classes.award}>[{award}]</span>}
            </div>

            <div className={classes.author}>
                {authorList.map((item, index) => {
                    if (index === me) {
                        return <div key={item} className={classes.meAuthor}>{item}, </div>
                    }
                    return <div key={item}>{item}, </div>
                })}
            </div>

            <div className={classes.journal}>{journal}</div>

            <div className={classes.detail}>
                [
                <div>
                    Paper:
                    <a className={classes.link}
                       href={pdf}
                       target={"_blank"}><PaperClipOutlined/>PDF</a>
                </div>
                <div style={{margin: "0 5px"}}>|</div>
                <div>
                    Material:
                    <a className={classes.link} href={video}
                       target={"_blank"}><VideoCameraOutlined/>Video</a>,
                    <a className={classes.link} href={code}
                       target={"_blank"}><CodeSandboxOutlined/>Code</a>,
                    <a className={classes.link} href={website}
                       target={"_blank"}><GlobalOutlined/>Website</a>,
                    <a className={classes.link} href={presentation}
                       target={"_blank"}><FundProjectionScreenOutlined/>Presentation</a>
                    <a className={classes.link} href={cite}
                       target={"_blank"}><LinkOutlined/>Cite</a>
                </div>
                ]
            </div>
        </div>
        <div className={classes.year}>{year}</div>
    </div>
}

export default PublicationItem;
