import React from "react";
import navigation from '../assets/navigation.png';
import placeholder from '../assets/Placeholder.png';
import {NavBar, BusinessCollection} from   "../ui-components"

export default function Home() {
    return (
      
      <div>
        <NavBar/>
        <BusinessCollection />
      </div>
    ) 
  }

let styles = {
    h1: {
      textAlign: "center",
      paddingTop: 0,
      paddingBottom: 0,
    },
  
    center: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#2F2E2E",
    },
    center2: {
      display: "flex",
      justifyContent: "center",
      marginTop: 16,
      marginBottom: 16,
    },
    h2: {
      textAlign: "center",
    },
};