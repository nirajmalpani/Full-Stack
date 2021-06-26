
import './style.css'
import Stories from '../../components/UI/Stories'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
/**
* @author
* @function Blog
**/

const Blog = (props) => {

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
    <>
    <div className="Blogheading">
        <div className="VerticalBlog"> The</div><h1 className="HeadingBlog">Siren</h1>
        <div className="GetStarted">Get Started</div>
    </div>
    <hr class="horizontal-Line"></hr>
    <div className="BlogOuter">
      <div className="BlogInner">
        <h1 className="bloghead">{posts.articletitle}</h1>
        <div class="textheader">
          <div class="iconsize">
            <i class="fa sizefull">&#xf007;</i>
          </div>
          <div class="headtag">
            <h4>Jackson</h4>
            <h6 className="bottom-blog-light">Jan 28th 2019</h6>
          </div>
          <div className="iconposition">
            <i class="fa fa-facebook icon"></i>
            <i class="fa fa-twitter icon"></i>
            <i class="fa fa-instagram icon"></i>
          </div>
        </div>
        <div class='imageblog'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/280px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg" alt="monument" ></img>
        {posts.blogger}
        </div>
        <div>
       
        </div>
      </div>
    </div>
    <div className="Text">
                  More By Siren     
                    <hr className="line"></hr>     
        </div>
        <hr class="horizontal-Line"></hr>
        <div className="Story">
                <Stories />
        </div>
    </>
   )

 }

export default Blog