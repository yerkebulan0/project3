import React from 'react'
import './checkbox.css'
import { trash } from './icon'
import { icon2 } from './icon'

export default function Dropdown({active ,setActive}){
    return(
        <div className="show">
          <div className="firstShow"> {trash} clicked </div>
          <div className="secondShow">{icon2} clicked </div>
        </div>
    )
}