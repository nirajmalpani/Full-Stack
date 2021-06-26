import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
/**
* @author
* @function Article
**/

const Article = (props) => {
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
    <div className="parent">
        <div className="subchild2">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/280px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg" alt="monument" ></img>
            </div>
            <a classname="anchor" href='/Blog'>
                <div className="Textinner">
                <h4 className="card-textHeading">{posts.home}</h4>
                <h6 className="card-basetext">{posts.articlebody}</h6>
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div></a>
            

        </div>
        <hr class="horizontal-Line"></hr>
        <div className="subchild2">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/280px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg" alt="monument" ></img>
            </div>
            <a classname="anchor" href='/Blog'>
                <div className="Textinner">
                <h4 className="card-textHeading">{posts.home}</h4>
                <h6 className="card-basetext">{posts.articlebody}</h6>
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div></a>
            

        </div>
        <hr class="horizontal-Line"></hr>
        <div className="subchild2">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/280px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg" alt="monument" ></img>
            </div>
            <a classname="anchor" href='/Blog'>
                <div className="Textinner">
                <h4 className="card-textHeading">{posts.home}</h4>
                <h6 className="card-basetext">{posts.articlebody}</h6>
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div></a>

        </div>
        <hr class="horizontal-Line"></hr>
        <div className="subchild2">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg/280px-Forrest_Gump_Point_Monument_Valley_November_2018_001.jpg" alt="monument" ></img>
            </div>
            <a classname="anchor" href='/Blog'>
                <div className="Textinner">
                <h4 className="card-textHeading">{posts.home}</h4>
                <h6 className="card-basetext">{posts.articlebody}</h6>
                <h6 className="bottom-light">{posts.articlefooter}</h6>
            </div></a>

        </div>
        <hr class="horizontal-Line"></hr>
    </div>
   )

 }

export default Article