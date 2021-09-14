import React, { useState }  from "react";
import { form } from 'react-bootstrap';
import logo from './Image/logo.jpeg';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import { Form,Row,Col } from 'react-bootstrap';



function MyVerticallyCenteredModal1(props) {
 var x;
 var y;
 var a;
 var b;
 var c;
 var d;
 var e;
 var f;
 var z;
function myFun(){
  if (z=="UPRNN"){
    if (x=="Bridcul" & y=="Bridcul@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    }
;
  }
  else if(z=="BRIDCUL"){
    if (x=="Bridcul" & y=="Bridcul@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    };
  }
  else if(z=="Pey Jal Nigam"){
    if (x=="Pey" & y=="Pey@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    };
  }
  else if(z=="Rural Works Department"){
    if (x=="Rural" & y=="Rural@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    };
  }
  else if(z=="Mandi Parishad"){
    if (x=="Mandi" & y=="Mandi@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    };
  }
  else if(z=="All"){
    if (x=="Admin" & y=="Admin@123"){
      window.location.href="/8755478544862-8877854964-8897542369dashboard-Security@uttarakhandHealthMinistry&familyWelfare248001.-Brillica_services_pvt_ltd";      
    }
    else{
      alert("Sorry, Your are not Authorized ")
    };
  }


  else{
    alert("message");
  }
  
  
}
console.log(b);
  function inputPass(event){
y=event.target.value;

  };
  function inputEvent(event){
       x=event.target.value;     
  };
  function inputEvent1(event){
    a=event.target.value;     
};
function inputEvent2(event){
  b=event.target.value;     
};

function inputEvent3(event){
  c=event.target.value;     
};

function inputEvent4(event){
  d=event.target.value;     
};

function inputEvent5(event){
  e=event.target.value;     
};
function inputEvent6(event){
  f=event.target.value;     
};
function inputEvent10(event){
  z=event.target.value; 
};


    return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="head1">
          <Modal.Title id="contained-modal-title-vcenter">
          <img src={logo} className="flogo"/>&nbsp; 
           Login Credential <i class="fas fa-lock"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <div className="container-fluid">
            <div className="row">
                <div className="formp" id="mymodal">
                
<form action="action_page.php" name="login" />
  <div className="container">
  
  <label for="name" className="agency">Executing Agency</label>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" onChange={inputEvent10}>
    <option>-----Choose Your Agency-----</option>
      <option onChange={inputEvent1}>All</option>
      <option onChange={inputEvent2}>BRIDCUL</option>
      <option onChange={inputEvent3}>Pey Jal Nigam</option>
      <option onChange={inputEvent4}>Rural Works Department</option>
      <option onChange={inputEvent5}>UPRNN</option>
      <option onChange={inputEvent6}>Mandi Parishad</option>
    </Form.Control>
  </Form.Group>


    <label for="name" className="user"><i class="fas fa-user-tie"></i> User-ID     </label>
    <input type="text" 
    placeholder="Enter Used-ID" 
    onChange={inputEvent} 
    required/>

<br/><br/>
    <label for="name" className="pass"><i class="fas fa-key"></i> Password       </label>
    <input type="password" 
    placeholder="Enter Password" 
    onChange={inputPass} 
    required/><br/>

    <br/>
    <div class="clearfix">
<button type="submit" class="signupbtn" onClick={myFun} >SUBMIT </button>    

      
    </div>
  </div>
                </div>
            </div>
        </div>




        </Modal.Body>
        
      </Modal>
      </>
    );
  };

export default MyVerticallyCenteredModal1;