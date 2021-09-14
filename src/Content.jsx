import React from "react";
import DatatablePage2 from "./Table2";

const Content=()=>{
        return(
                
                <>
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-9">
                                       <div className="ctext">
                                       <span>Running Project</span>
                                       <span>Completed Project</span>
                                      <DatatablePage2/>
                                       </div> 
                                </div>
                                <div className="col-sm-3">
                                <div className="cnew">
                                <table>
                                        <tr>
                                                <th>New & Update</th>
                                        </tr>
                                        <tr>
                                                <td>
                                                <marquee width="100%" direction="up" height="200px" scrollamount="2" >
  <p className="ref1"><a href="#" >ADB mission visiting IDIPT from August 27 to August 28, 2018.</a> </p>
 <a href="#" className="ref2">  <p> ADB mission visiting IDIPT from May 23, 2017 till May 26, 2017. ADB Review meeting is going to be held on May 25,2017 at IDIPT conference hall.</p></a> 
 <a href="#" className="ref3">  <p> Review Meeting held on January 23, 2018 at UTDB Conference Hall. The Program Director, IDIPT chaired the meeting.</p></a> 

</marquee>       
                                                </td>
                                        </tr>
                                        
                                </table>
                               

</div>   
                                        </div>
                                
                        </div>
                </div>


                </>
        );
};

export default Content;