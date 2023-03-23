import React from 'react'
import '../pages/pages.css'

const Aboutitems = () => {
    return(
    <div class="about-content">
        <div class="item-1">
            <h5>Justin Hong</h5>
            <img style={{width:250,height:300, marginRight:50}} src={require('../assets/justin.jpeg')}></img>
        </div>
        
        <div class="item-2">
            <h5>Tan Qi Yun</h5>
            <img style={{width:450,height:400, marginRight:50}} src={require('../assets/subres.png')}></img>
            <h5></h5>
        </div>
        <div class="item-3">
            <h5>Lim Chang Yu</h5>
            <img style={{width:250,height:300, marginRight:50}} src={require('../assets/cy.jpeg')}></img>
        </div>
        <div class="item-4">
            <h5>Yan Jie</h5>
            <img style={{width:225,height:300, marginRight:50}} src={require('../assets/Yan_Jie.jpg')}></img>
        </div>
        <div class="item-5">
            <h5>Cindy Ursia</h5>
            <img style={{width:450,height:530, marginRight:50}} src={require('../assets/recommendations.png')}></img>
        </div>
  
    </div>
    )
}

export default Aboutitems