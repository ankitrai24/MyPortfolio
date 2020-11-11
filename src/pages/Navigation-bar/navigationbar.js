
import {Button} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {contactPath, homePath} from "../Constants/constants";

import {useHistory} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";

const useStyles =makeStyles({
    Navigationpage:{
        display:"flex",
        justifyContent:"space-between"

    }

})
export function Navigationbar() {
    const history =useHistory();

    const classes = useStyles();


    function  handleHomenavigation(){
        history.push(homePath);

    }
    function  handleContactnavigation(){
        history.push(contactPath);

    }


    return (


        <div  >
            <AppBar position={"static"} className={classes.Navigationpage}>
                <Toolbar>
                    <Typography variant={"h6"}>
                        Ankit Rai
                    </Typography>
                    <Button color={"inherit"} onClick={handleHomenavigation} >
                        Home
                    </Button>
                    <Button color={"inherit"} onClick={handleContactnavigation}>
                        Contact
                    </Button>

                </Toolbar>


            </AppBar>


        </div>

    );
}