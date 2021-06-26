
import Header from '../../components/Header'
import Advertisement from '../../components/UI/Advertisement'
import Post from '../../components/UI/Post'
import Article from '../../components/UI/Article'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
/**
* @author
* @function Fitness
**/

const Fitness = (props) => {
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
    <Header />
    <hr class="horizontal-Line"></hr>
    <div className="Text">
                  Fitness    
                    <hr className="line"></hr>     
                </div>
        <div class="Latest-Article">
                
            <div className="leftarticle">
                    <div className="artic">
                        <Article/>
                    </div>
                    <div className="imagearticle">
                    <img src="https://i.pinimg.com/originals/42/dd/e0/42dde0b181f0a98711215430d7b89955.jpg" alt="river pic"></img>
                    <h1 className="bottom-left">{posts.home}</h1>
                    </div>

            </div>
            <div className="Rightarticle">
            <div className='toppost'>
                    <Post />
                </div>
                <div className="Advert">
                     <Advertisement/>
                </div>
                
            </div>
        </div>
    </>
   )

 }

export default Fitness