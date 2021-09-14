import React from "react";
import j1 from './Image/hero1 (3).jpg' ;
import j2 from './Image/hero1 (1).jpg' ;
import j3 from './Image/hero1 (2).jpg' ;
import j4 from './Image/hero1 (3).jpg' ;

const Imagedetail=()=>{
        return(
                <>
           <div className="container-fluid">
                   <div className="row">
                           <div className="col-sm-12">
                                <img src={j1} className="image"/>
                           </div>
                   </div>
           </div>

           <div className="container-fluid">
                   <div className="row">
                           <div className="col-sm-4">
                                   <img src={j2} className="image" />
                           </div>
                           <div className="col-sm-4">
                                <img src={j1} className="image"/>
                           </div>
                        <div className="col-sm-4">
                                   <img src={j3} className="image"/>
                        </div>
                   </div>
           </div>

                </>

        );
};
export default Imagedetail;