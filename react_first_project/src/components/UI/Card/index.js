import React from 'react'
import './style.css'
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card">
        <div className="Text">
          The Latest
          <hr className="line"></hr>
        </div>
        <div className="card-item">
          <div className="card-block">
            <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
            <h4 class="card-textHeading">Joshua Tree overnight Adventure</h4>
            <h6 class="card-basetext">Gujarat is vastly underratted and ita a mystery to us why it isnt a tourist destination.</h6>
            <h6 className="bottom-light">Travel/12/4/2021</h6>
          </div>
          <div className="card-block">
          <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
            <h4 class="card-textHeading">Joshua Tree overnight Adventure</h4>
            <h6 class="card-basetext">Gujarat is vastly underratted and ita a mystery to us why it isnt a tourist destination.</h6>
            <h6 className="bottom-light">Travel/12/4/2021</h6>
          </div>
          <div className="card-block">
          <img src="https://i1.wp.com/news.outdoortechnology.com/wp-content/uploads/2021/03/joshua-tree-national-park.jpg?resize=930%2C620&ssl=1" alt="Joshua tree" className="imgJoshua"></img>
            <h4 class="card-textHeading">Joshua Tree overnight Adventure</h4>
            <h6 class="card-basetext">Gujarat is vastly underratted and ita a mystery to us why it isnt a tourist destination.</h6>
            <h6 className="bottom-light">Travel/12/4/2021</h6>
          </div>
      </div>
    </div>
   )

 }

export default Card