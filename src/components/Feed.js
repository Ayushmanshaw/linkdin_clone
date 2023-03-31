import React, { useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import   db   from './firebase';
import '../css/feed.css'
import firebase from "../firebase";
function Feed() {
  const[input,SetInput] = useState();
const submitPost=(e)=>{
  e.preventDefault();
  db.collection("posts").add({
    name:"Ayushman shaw",
    description:"this is test description",
    message:"input",
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  });
  SetInput("");
}
  return (
    <div className='feed'>
        <div className="feed__input">
        <div className="feed__form">
          {/* <Avatar src=""/> */}
            <form onSubmit={submitPost}>
                <input type="text" placeholder='start a post' value={ input} onChange={e=> SetInput(e.target.value)} />
                <input type="submit" />
            </form>
            </div>
        
        <div className="feed__options">
            <div className="option">
            <InsertPhotoIcon style={{color:'#70b5f9'}}/>
            <span>Photo</span>
            </div>
            <div className="option">
            <YouTubeIcon  style={{color:'#7fc15e'}}/>
            <span>Video</span>
            </div>
            <div className="option">
            <TodayIcon  style={{color:'#e7a33e'}}/>
            <span>Event</span>
            </div>
            <div className="option">
            <AssignmentIcon  style={{color:'#fc9295'}}/>
            <span>Write Article</span>
            </div>
        </div>
    </div>
    <Post name="ayushman shaw" description="this is test" message=" we are learning"/>
    </div>
  )
}

export default Feed