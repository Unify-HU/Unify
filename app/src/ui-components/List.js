import React from 'react'
import { Offering } from '../models'

export default function List({Offerings}) {
    return (
        <div>  
            <ul>
                <li key={Offering.businessID}>
                    Name:
                       <span>{Offering.name}</span>
                    Description: 
                       <span>{Offering.description}</span>
                </li>
            </ul>
        </div>
    )
}
