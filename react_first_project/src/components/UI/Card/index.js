import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
/**
* @author
* @function Card
**/

const Card = (props) => {


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
    <div className="card">
        <div className="Text">
          The Latest
          <hr className="line"></hr>
        </div>
        <div className="card-item">
          <div className="card-block">
            <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
            <h4 class="card-textHeading">{posts.cardheading}</h4>
            <h6 class="card-basetext">{posts.articlebody}</h6>
            <h6 className="bottom-light">{posts.articlefooetr}</h6>
          </div>
          <div className="card-block">
          <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
          <h4 class="card-textHeading">{posts.cardheading}</h4>
            <h6 class="card-basetext">{posts.articlebody}</h6>
            <h6 className="bottom-light">{posts.articlefooetr}</h6>
          </div>
          <div className="card-block">
          <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
          <h4 class="card-textHeading">{posts.cardheading}</h4>
            <h6 class="card-basetext">{posts.articlebody}</h6>
            <h6 className="bottom-light">{posts.articlefooetr}</h6>
          </div>
      </div>
    </div>
   )

 }

export default Card