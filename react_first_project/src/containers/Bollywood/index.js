import React from 'react'
import Header from '../../components/Header'
import Advertisement from '../../components/UI/Advertisement'
import Post from '../../components/UI/Post'
import Article from '../../components/UI/Article'
/**
* @author
* @function Bollywood 
**/
import './style.css'
const Bollywood  = (props) => {
  return(
    <>
    <Header />
    <div className="shift">
    <hr class="horizontal-Line"></hr>
    <div className="Text">
                  Bollywood     
                    <hr className="line"></hr>     
                </div>
        <div class="Latest-Article">
                
            <div className="leftarticle">
                    <div className="artic">
                        <Article/>
                    </div>
                    <div className="imagearticle">
                    <img src="https://i.pinimg.com/originals/42/dd/e0/42dde0b181f0a98711215430d7b89955.jpg" alt="river pic"></img>
                    <h1 className="bottom-left">Title of Verticle gallery</h1>
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
    </div>
    </>
   
   )

 }

export default Bollywood 