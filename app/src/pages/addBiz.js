import React from "react";
import {BrowserRouter as Router, useNavigate } from 'react-router-dom';
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
      onClick: () => {handleClick()}
    }
  }
    return (
      
      <div className="AddBiz">
        <UnifyBanner width="1220px" overrides={ButtonOverRide}/>
        <AddBusiness />
      </div>
    ) 
  }