import React from "react";
// import {BrowserRouter as Router, useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import {AddBusiness, UnifyBanner} from   "../ui-components"

export default function AddBiz() {
  let Navigate = useNavigate()
  function handleClick(){
    Navigate('/')
  }
  const ButtonOverRide = 
  {
    "Button": {
      label: {text: "Return"},
      onClick: () => {
        handleClick();
      }
    }
  }
    return (
      
      <div className="AddBiz">
        <UnifyBanner width="100%" overrides={ButtonOverRide}/>
        <div className="biz-card-wrapper">
          <AddBusiness />
        </div>
      </div>
    ) 
  }