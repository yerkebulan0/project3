import React from 'react'
import './checkbox.css'
import { trash } from './icon'
import { icon2 } from './icon'



export default function Dropdown({active ,setActive,DeleteForever,resetTextStyle}){
    return(
        <div className="show">
          <div className="firstShow"  onClick={() => {
          DeleteForever();
        }} style={{cursor:"pointer"}}> {trash} Delete Forever </div>
          <div style={{cursor:'pointer'}} onClick={resetTextStyle} className="secondShow">{icon2} Move Back To To Do </div>
        </div>
    )
}