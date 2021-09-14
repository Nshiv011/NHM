import React from 'react';
import { Switch, Route } from 'react-router';
// import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Reports from './Report';
import Imagegallery from './Image';
import Sign from './Sign';
import Dehradun from './Dehradun';
import Rudra from './Rudra';
import Bageshwar from './Bageshwar';
import Nainital from './Nainital';
import Pithoragarh from './Pithoragarh';
import usnagar from './Usnagar';
import Uttarkashi from './Uttarkashi';
import Haridwar from './Haridwar';
import Garhwal from './Garhwal';
import Champawat from './Champawat';
import Chamoli from './Chamoli';
import Tehri from './Tehri';
import Almora from './Almora';
const App=()=>{
    return(
        <>
        
        
       
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd" component={Sign}/>
        <Route exact path="/report" component={Reports}/>
        <Route exact path="/imagegallery" component={Imagegallery}/>
        <Route exact path="/tehri" component={Tehri}/>
        <Route exact path="/dehradun" component={Dehradun}/>
        <Route exact path="/uttarkashi" component={Uttarkashi}/>
        <Route exact path="/chamoli" component={Chamoli}/>
        <Route exact path="/champawat" component={Champawat}/>
        <Route exact path="/haridwar" component={Haridwar}/>
        <Route exact path="/nainital" component={Nainital}/>
        <Route exact path="/rudraprayag" component={Rudra}/>
        <Route exact path="/pithoragarh" component={Pithoragarh}/>
        <Route exact path="/Garhwal" component={Garhwal}/>
        <Route exact path="/almora" component={Almora}/>
        
        </Switch>
        
        </>
    );
};
export default App;