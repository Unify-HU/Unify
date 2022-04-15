import {BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import React from "react";
import {UnifyBanner, BusinessCardCollection, Spotlight, SearchText} from   "../ui-components"
import '../index.css';



export default function Home() {
  let Navigate = useNavigate()
  function handleClick(){
    Navigate('/addBiz')
    console.log("navigating")
  }
  const ButtonOverRide = 
  {
    "Button": {
      onClick: () => {handleClick()}
    }
  }
    return (
      <div className="home">
        <UnifyBanner width="100%" overrides={ButtonOverRide}/>
        <Spotlight padding-bottom="200px"/>
        <SearchText/>
        <div className="biz-card-wrapper">
          <BusinessCardCollection/>
        </div>
      </div>
    ) 
  }
