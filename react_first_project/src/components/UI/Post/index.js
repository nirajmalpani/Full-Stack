import React from 'react'
import './style.css'
/**
* @author
* @function Post
**/

const Post = (props) => {
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
            <h5 className="post-textHeading">Catch waves with an adventure guide</h5>
            <h6 className="bottom-light">Travel/12/4/2021</h6>
        </div>
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">Catch waves with an adventure guide</h5>
            
                <h6 className="bottom-light">Travel/12/4/2021</h6>
            </div>
        </div>  
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">Catch waves with an adventure guide</h5>
            
                <h6 className="bottom-light">Travel/12/4/2021</h6>
            </div>
        </div>
        <div className="smallimagepost">
            <div className="smallimg">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIpBerkxWBXbf_BH4aJJktc-Pe_UyfthImQ&usqp=CAU" alt="river pic"  ></img>      
            </div>
            <div className="smalltext">
                <h5 className="post-textHeading">Catch waves with an adventure guide</h5>
            
                <h6 className="bottom-light">Travel/12/4/2021</h6>
            </div>
        </div>              
        
        

    </div>
   )

 }

export default Post