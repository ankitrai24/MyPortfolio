import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import img from '../Home/IMG-20200303-WA0005.jpg'


const useStyles = makeStyles({
    Homepage: {
        display:"inline-flex"
    },
    Homepage_img :{
        flex:1

    },
    Homepage_desc :{

        flex:2
    }


})

export function Home() {

    const classes =useStyles();
    return(
        <div className={classes.Homepage}>
            <div className={classes.Homepage_img}>
                <img src ={img} alt="" />
            </div>
            <div className={classes.Homepage_desc}>
                <p>
                    My name is Ankit Rai. I am Currently pursuing my masters in Computer Science.
                    I have done my Underguaduate degree in Information Technology and also have
                    2 years of work experince in IT industry as an Application Support Engineer.
                    As an application support engineer i had an experience of working in core
                    banking applications such as Flexcube and UBS. My responsibilities included
                    coordinating with multiple teams and vendors(Oracle Team,Microsoft Team) for
                    solving of critical issues and release deployment activities on production
                    branch servers as well as on backup servers.I am currently working on building
                    my portfolio website which is a full stack web application using React APP(Front End),
                    Express Server(Back End) and MongoDB (Database).
                </p>
            </div>

        </div>

    )


}