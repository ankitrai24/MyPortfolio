import React from "react";
import TextField from "@material-ui/core/TextField";
import {classes} from "istanbul-lib-coverage";
import {Button} from "@material-ui/core";





export function Contact(){

    const[textEnter,setisTextEntered] =React.useState(false)

    function handleChange(){
        setisTextEntered(true);

    }

    function  onClickEvent(){

        if(textEnter ===true)
        {
            alert("Thank you will get back to you soon!!")
        }

        else{
            alert("Please enter the email id")

        }

    }






    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onChange={handleChange} >
                <TextField id="standard-basic" label="Enter your email id"  />
            </form>
            <Button color="primary" onClick={onClickEvent}>
                Submit
            </Button>
            <Button variant="outlined" onClick={handleChange}>
                Submit
            </Button>


        </div>



    )

}