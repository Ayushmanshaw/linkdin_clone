import React from 'react'
// import {Avatar} from "@mui/material"

function Headeroptions({Icon,title}) {
  return (
    <div className='header__options'>
      {
        Icon && <Icon></Icon>
      }
      <span>{title}</span>
    </div>
  )
}

export default Headeroptions
