import React from 'react'
import '../pages/pages.css'

const Motivation = () => {
  return (
    <div class="moti-content">
        <div class="item-1">
            <text style={{fontWeight:500}}>
            According to the International Energy Agency, global oil<br/>
            demand could decrease by more than 50% over the next <br/>
            25 years due to global effortsin achieving NZE. <br/>
            As such, SCB faces the challenge of redistributing <br/>
            investments towards more sustainable companies. <br/>
            </text>
        </div>

        <div class="item-2">
            <text style={{fontWeight:500}}>
            SCB must monitor the emissions of clients to <br/>
            determine if investments need to be diverted.  <br/>
            Of all clients, data sources provided emissions<br/>
            for only 61%. As such, SCB estimates the emissions <br/>
            for the remaining clients though linear regression <br/>
            using company revenue as the predictive feature. <br/>
            </text>
        </div>

        <div class="item-3">
            <text style={{fontWeight:500}}>
            According to the Partnership for Carbon Accounting <br/>
            Financials (PCAF), using physical-based features to <br/>
            estimate emissions is more desired as compared to using <br/>
            financial indicators. We therefore explored using <br/>
            non-financial indicators to improve on the predictive <br/>
            accuracy of emissions estimation provided by the <br/>
            revenue-based linear regression model. <br/>
            </text>
        </div>
  
    </div>
  )
}

export default Motivation
