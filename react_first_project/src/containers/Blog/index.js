import React from 'react'
import './style.css'
import Stories from '../../components/UI/Stories'
/**
* @author
* @function Blog
**/

const Blog = (props) => {
  return(
    <>
    <div className="Blogheading">
        <div className="VerticalBlog"> The</div><h1 className="HeadingBlog">Siren</h1>
        <div className="GetStarted">Get Started</div>
    </div>
    <hr class="horizontal-Line"></hr>
    <div className="BlogOuter">
      <div className="BlogInner">
        <h1 className="bloghead">Catch waves with an adventure guide</h1>
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
        </div>
        <div>
        West Bengal is the second largest tea-producing state in India and is home to the globally acclaimed Darjeeling tea variety. Its location advantage makes the state a traditional market for eastern India, the Northeast, Nepal, and Bhutan. It is also a strategic entry point for markets in Southeast Asia.FACTFILE Capital: Kolkata Geographical Area (sq km):88,752 .West Bengal is situated in eastern India and shares its borders with Jharkhand, Bihar, Odisha, Sikkim, and Assam. The state also shares international borders with Bangladesh, Bhutan, and Nepal.
        West Bengal has abundant natural resources of minerals and suitable agro-climatic conditions for agriculture, horticulture, and fisheries.
        West Bengal ranked eleventh among Indian states on ease of doing business and reforms implementation according to a study by the World Bank and KPMG.
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