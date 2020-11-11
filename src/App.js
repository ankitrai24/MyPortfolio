import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import {Contact} from "./pages/Contact/contactpage";
import {Home} from "./pages/Home/homepage";

import {Navigationbar} from "./pages/Navigation-bar/navigationbar";
import {contactPath, homePath} from './pages/Constants/constants.js';
import {AppBar, Toolbar, Typography} from "@material-ui/core";


export default function App() {
  return (

      <BrowserRouter>
        <div>

          <Navigationbar/>


          <Switch>
            <Route path={contactPath}>
              <Contact/>
            </Route>


            <Route path={homePath}>
              <Home/>
            </Route>

          </Switch>

          <div>
            <AppBar position={"static"}>
              <Toolbar>
                <Typography variant={"h6"}>
                  Footer
                </Typography>
              </Toolbar>

            </AppBar>
          </div>


        </div>
      </BrowserRouter>
  );
}


