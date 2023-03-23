import React from 'react'
import '../pages/pages.css'

const Methoditems = () => {
    const statdata = [
        {Method:"Pairwise Plots",Purpose:"Check for linearity and outliers",Significance:"Determining if linear regression is suitable & investigating if outliers are natural/non-natural"},
        {Method:"Correlation Coefficient",Purpose:"Determine correlation strength between independent and dependent features",Significance:"Able to remove features that are not correlated with emissions"},
        {Method:"Variance Inflation Factor (VIF)",Purpose:"Detect multicollinearity",Significance:"Able to remove features that cause multicollinearity in dataset"},
        {Method:"One-way ANOVA",Purpose:"Determine statistical significance of categorical features",Significance:"Able to remove categorical features that are not statistaically significant"},
      ]
  return (
    <div class="method-content">
        <div class="item-1">
            <h3>Two-Level Approach</h3>
            <img style={{width:750,height:200, marginRight:50,paddingBottom:"30px"}} src={require('../assets/twolevelapproach.png')}></img>
        </div>
        
        <div class="item-2">
            <h3>Features Collected</h3>
            <img style={{width:700,height:325, marginRight:50, paddingBottom:"30px"}} src={require('../assets/featuretable.png')}></img>
        </div>
        <div class="item-3">
            <h3>Statistical Checks</h3>
            <table>
                <tr>
                <th>Method</th>
                <th>Purpose</th>
                <th>Significance</th>
                </tr>
                {statdata.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.Method}</td>
                    <td>{val.Purpose}</td>
                    <td>{val.Significance}</td>
                    </tr>
                )
                })}
            </table>
        </div>
        <div class="item-4">
            <h3 style={{paddingBottom:"20px"}}>Modeling Techniques</h3>
            <h5>Industrial Level</h5>
            <img style={{width:800,height:400, marginRight:50}} src={require('../assets/indusmodel.png')}></img>
        </div>
        
        <div class="item-5">
            <h5 style={{paddingTop:"30px"}}>Subsector Level</h5>
            <img style={{width:800,height:250, marginRight:50}} src={require('../assets/submodel.png')}></img>
        </div>
  
    </div>
  )
}

export default Methoditems