import React from "react";
import {UnifyBanner, BusinessCardCollection, AddBusiness} from   "../ui-components"

export default function Home() {
    return (
      
      <div className="home">
        <UnifyBanner width="1220px" />
        <AddBusiness />
        <BusinessCardCollection />
      </div>
    ) 
  }