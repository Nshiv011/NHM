import React from 'react';
import logo from './Image/logo.jpeg';
import ulogo from './Image/ulogo.png';
// import brillica1 from './Image/logo.jpg';

const Footer=()=>{
    return(
        <>
        <div className="container-fluid ">
        <div className="row footer">
        <div className="col-sm-1"></div>
        
            <div className="col-sm-3 first">
            <h4 className="qui">First slide
Construction Progress Monitoring System </h4>
                    <img src={ulogo} className="logos"/>
                    
                    <div className="footer-content">
                   
            </div>
            </div>

            <div className="col-sm-2 second">
            <h3 className="quick">Reports</h3>
            <ul>
                <li>Project Report</li>
                <li>District Wise</li>
                <li>New Update</li>
                <li>Corona Update</li>
                <li>Health Welfare</li>

            </ul>

            </div>

            <div className="col-sm-2 third">
            <h4 className="quick">Contact</h4>
            <p className="adress"><b>National Health Mission, Uttarakhand</b>, Directorate of Health Services,<br/> Village Danda Lakhond<br/> P.O. Gujrara, Sahastradhara Road,Dehradun Uttarakhand,<br/> INDIA-248001

</p>


            </div>

            <div className="col-sm-3 fourth">
            <h4 className="quick">An Initiative</h4>
            <img src={logo} className="brillica"/>


            
            </div>
            <div className="col-sm-1">

            </div>

        
        </div>
        </div>


<div className="container-fluid  ">
<div className="row last">
    <div className="col-sm-1">

    </div>
    <div className="col-sm-5 copyright">
<p className="copy">Copyright © 2021 Uk-Construction Design By Brillica Services</p>
    </div>
    <div className="col-sm-2">

    </div>
    <div className="col-sm-3 copyright">
<p className="copy">Terms & Conditions   |   Privacy Policy</p>
    </div>
    <div className="col-sm-1">

</div>
</div>
</div>

        </>
    );
};

export default Footer;