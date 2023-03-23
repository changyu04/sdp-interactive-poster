import React from 'react'
import '../pages/pages.css'

const Methoditems2 = () => {
  return (
    <div class="method-content2">
        <div class="item-1">
            <h5>Industrial Level</h5>
            <img style={{width:700,height:350, marginRight:50}} src={require('../assets/indusmodel.png')}></img>
        </div>
        
        <div class="item-2">
            <h5>Subsector Level</h5>
            <img style={{width:700,height:225, marginRight:50}} src={require('../assets/submodel.png')}></img>
        </div>
  
    </div>
  )
}

export default Methoditems2