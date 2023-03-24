import React from 'react'
import '../pages/pages.css'

const Aboutitems = () => {
    return(
    <div class="about-content">
        <div class="item-1">
            <h5>Justin Hong</h5>
            <img style={{width:310,height:350}} src={require('../assets/justin.jpeg')}></img>
        </div>
        
        <div class="item-2">
            <h5>Tan Qi Yun</h5>
            <img style={{width:330,height:350}} src={require('../assets/qiyun.jpeg')}></img>
            <h5></h5>
        </div>
        <div class="item-3">
            <h5>Lim Chang Yu</h5>
            <img style={{width:320,height:350}} src={require('../assets/cy.jpeg')}></img>
        </div>
        <div class="item-4">
            <h5>Yan Jie</h5>
            <img style={{width:290,height:350}} src={require('../assets/Yan_Jie.jpg')}></img>
        </div>
        <div class="item-5">
            <h5>Cindy Ursia</h5>
            <img style={{width:310,height:350}} src={require('../assets/cindy.jpeg')}></img>
        </div>
        <div class="quote quote1">
            <text style={{fontWeight:"bold"}}>
                Strategic thinking is a critical <br/>
                skill to have in distilling <br/>
                both problems and insights. <br/>
            </text>
        </div>
        <div class="quote quote2">
            <text style={{fontWeight:"bold"}}>
                There is no business to be done<br/>
                on a dead planet.<br/>
                ESG investing is the way to go. <br/>
            </text>
        </div>
        <div class="quote quote3">
            <text style={{fontWeight:"bold"}}>
                "I cant believe just how much <br/>
                GHG is being emitted.<br/>
                This needs to stop NOW!" <br/>
            </text>
        </div>
        <div class="quote quote4">
            <text style={{fontWeight:"bold"}}>
                “Sustainability is no longer<br/>
                about doing less harm. <br/>
                Its about doing more good<br/>
                
            </text>
        </div>
        <div class="quote quote5">
            <text style={{fontWeight:"bold"}}>
                “The environment and economy<br/>
                are two sides of the same coin.<br/>
                If we cannot sustain the<br/>
                environment, we cannot <br/>
                sustain ourselves. <br/>
            </text>
        </div>
    </div>
    )
}

export default Aboutitems