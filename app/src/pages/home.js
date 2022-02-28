import React from "react";
import SearchBar from './ui-components/SearchBar';
import navigation from './assets/navigation.png';
import placeholder from './assets/placeholder.png';

export default function Home() {
    return (
      
      <div style={{ fontFamily: "Pacifico" }}>
        <center>
          Unify
        <SearchBar />
        </center>
        <center2>
         <img src={navigation}/>
         Suggestions near Washington, 20001
         </center2>
        <h1>
          <img src={placeholder} alt="placeholder image for products"/>
        </h1>

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