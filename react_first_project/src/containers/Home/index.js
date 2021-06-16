import Header from '../../components/Header'
import Card from '../../components/UI/Card'
import Article from '../../components/UI/Article'
import Advertisement from '../../components/UI/Advertisement'
import Post from '../../components/UI/Post'
import Stories from '../../components/UI/Stories'
import'./style.css'
const Home=props =>{
    return(
    <>
        <Header />
        <div className="shift">
        <hr class="horizontal-Line"></hr>
        <div className="Outerimg">
            <div className="biggerImg">
                <img src="https://i.pinimg.com/originals/42/dd/e0/42dde0b181f0a98711215430d7b89955.jpg" alt="river pic"></img>
                <h1 className="bottom-left">Title of Verticle gallery</h1>
                <h6 className="bottom-bottom">Travel/12/4/2021</h6>
            </div>
            <div className="smallerImg">
                <div className="inner1img">
                    <img src="https://i.pinimg.com/originals/42/dd/e0/42dde0b181f0a98711215430d7b89955.jpg" alt="river pic"></img>
                    <h1 className="bottom-left">Title of Verticle gallery</h1>
                <h6 className="bottom-bottom">Travel/12/4/2021</h6>
                </div>
                <div className="inner2img">
                    <img src="https://i.pinimg.com/originals/42/dd/e0/42dde0b181f0a98711215430d7b89955.jpg" alt="river pic"></img>
                    <h1 className="bottom-left">Title of Verticle gallery</h1>
                <h6 className="bottom-bottom">Travel/12/4/2021</h6>
                </div>
            </div>  
        </div>
        <div>
                <Card />
        </div>
        <div className="Text">
                  Latest Articles     
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
                <div className="Advert">
                     <Advertisement/>
                </div>
                <div className='toppost'>
                    <Post />
                </div>
            </div>
        </div>
        <div className="Text">
                  Latest Stories     
                    <hr className="line"></hr>     
        </div>
        <hr class="horizontal-Line"></hr>
        <div className="Story">
                <Stories />
        </div>
        </div>
    </>
        );
}
export default Home