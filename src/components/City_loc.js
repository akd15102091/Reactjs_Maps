import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import MapComponent from "./MapComponent";

const City_loc=()=>{

  if(!localStorage.getItem("postal_code")){
    localStorage.setItem("postal_code","selectedCity") ;
  }
  let locArr = ["303702","2000","302033","506001"] ;
  
  ///const [locstatus,setLocstatus]=useState("-1") ;
  var locstatus="-1"
  let flag=0;
  let val = localStorage.getItem("postal_code") ;
  for(let i=0;i<locArr.length;i++){
    if(locArr[i]==val){
      flag=1;
      break;
    }
  }

  if(val!="selectedCity"){
    if(flag===0){
      locstatus="NO" ;
    }
    else{
      locstatus="YES";
    }
  }


  
  return (
   <React.Fragment>
       
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navcls">
          <img src ="images/logo.jpg" height="40" width="60" />
          &emsp;

          <div className=" tempcls1">{localStorage.getItem("postal_code")}&nbsp;</div>
            <div data-toggle="modal" data-target="#exampleModal" className=" tempcls1">
              <i className="fa fa-chevron-down" ></i>
            </div>
        
      </div>
    </nav>      

    <div className="modal fade "  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl  modelCls"  role="document">
            <div className="modal-content">
                <div className="modal-body ">
                  <div className="contaner-fluid mb-5  ">
                      <div className="row">
                            <div className="col-12 mx-auto">
                                <div className="titlecls">
                                  <div><h3 >Please setup location</h3></div>
                                  <div className="crosscls">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                </div>
                                <div><p>Help us with your location so we can serve you better. </p></div>
                            </div>
                      </div>
                      <br /><br /><br /><br /><br /><br />
                      <div className="row">
                          <div className="col-12 mx-auto">
                              <div className="row gy-3 main-div">
                                  <div className="col-md-6 col-12  ">
                                     <center><a href="/mapcomponent" className="btn btn-primary btn-lg">Locate by Map</a></center>
                                  </div>

                                  <div className="col-md-6 col-12 ">
                                  < center><a href="/manualsearch" className="btn btn-primary btn-lg"> Type Manually</a></center>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <br /><br /><br /><br /><br /><br /><br /><br />
                      
                  </div>
                </div>
            </div>
        </div>
    </div>

    {locstatus=="NO" && <h3 className="tempcls3">Sorry, We are not delivering at this location...!!</h3>}
    {locstatus=="YES" && <h3 className="tempcls3">We will deliver within 2 days...!</h3>}

   </React.Fragment>
   )
}

export default City_loc;