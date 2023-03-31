import React from 'react'
import Avatar from '@mui/material/Avatar';

function Headeroptions({Icon,title,avatar}) {
  return (
    <div className='header__options'>
      {
        Icon && <Icon></Icon>
      }
      {
        avatar && <Avatar name={avatar}></Avatar>
      }
      <span>{title}</span>
    </div>
  )
}

export default Headeroptions
