import React from 'react'
import '../pages/pages.css'

const Resultitems = () => {
    return(
    <div class="result-content">
        <div class="item-1">
            <h5>Industrial Level Results</h5>
            <img style={{width:550,height:680, marginRight:50,paddingBottom:"30px"}} src={require('../assets/indusres.png')}></img>
        </div>
        
        <div class="item-2">
            <h5>Subsector Level Results</h5>
            <img style={{width:450,height:400, marginRight:50}} src={require('../assets/subres.png')}></img>
            <h5></h5>
        </div>
        <div class="item-3">
            <h5 style={{padding:"20px"}}>Results Summary</h5>
            <img style={{width:570,height:180, marginRight:50}} src={require('../assets/ressummary.png')}></img>
        </div>
        <div class="item-4">
            <h5>Recommendations</h5>
            <img style={{width:450,height:530, marginRight:50}} src={require('../assets/recommendations.png')}></img>
        </div>
  
    </div>
    )
}

export default Resultitems