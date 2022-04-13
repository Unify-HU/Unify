import {BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import React from "react";
import {UnifyBanner, BusinessCardCollection} from   "../ui-components"




export default function Home() {
  let Navigate = useNavigate()
  function handleClick(){
    Navigate('/addBiz')
  }
  const ButtonOverRide = 
  {
    "Button": {
      onClick: () => {handleClick()}
    }
  }
    return (
      <div className="home">
        <UnifyBanner width="1220px" overrides={ButtonOverRide}/>
        <BusinessCardCollection />
      </div>
    ) 
  }