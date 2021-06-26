import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
/**
* @author
* @function Post
**/

const Post = (props) => {
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
    <div class="postouter">
        <div className="bigimagepost">
            <div className="Text">
                Top Posts    
                <hr className="line"></hr>     
            </div>
            <div className="imagesize">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>
            </div>
            <h5 className="post-textHeading">{posts.articletitle}</h5>
            <h6 className="bottom-light">{posts.articlefooter}</h6>
        </div>
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">{posts.articletitle}</h5>
            
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div>
        </div>  
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">{posts.articletitle}</h5>
            
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div>
        </div>
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">{posts.articletitle}</h5>
            
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div>
        </div>              
        
        

    </div>
   )

 }

export default Post