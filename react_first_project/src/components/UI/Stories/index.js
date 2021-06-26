import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
/**
* @author
* @function Stories
**/

const Stories = (props) => {
    const [posts,setposts] = useState(1);
    console.log(posts)
    useEffect(()=>{
      axios.get("http://localhost:3001/home")
      .then(res=>{
        console.log(res.data)
        setposts(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])


  return(
    <div className="OuterStory">
        <div className="InnerStory">
            <h3 className="head-Story">{posts.articletitle}</h3>
            <p className="insidetext">{posts.stories}</p>
            <h6 className="story-text">{posts.tech}<p className="bottom-light-story">{posts.date}</p></h6>
        </div>
        <div className="InnerStory">
        <h3 className="head-Story">{posts.articletitle}</h3>
            <p className="insidetext">{posts.stories}</p>
            <h6 className="story-text">{posts.tech}<p className="bottom-light-story">{posts.date}</p></h6>
        </div>
        <div className="InnerStory">
        <h3 className="head-Story">{posts.articletitle}</h3>
            <p className="insidetext">{posts.stories}</p>
            <h6 className="story-text">{posts.tech}<p className="bottom-light-story">{posts.date}</p></h6>
        </div>
        <div className="InnerStory">
        <h3 className="head-Story">{posts.articletitle}</h3>
            <p className="insidetext">{posts.stories}</p>
            <h6 className="story-text">{posts.tech}<p className="bottom-light-story">{posts.date}</p></h6>
        </div>
    
    </div>
   )

 }

export default Stories