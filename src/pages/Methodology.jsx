import React from 'react'
//import Flexbox from 'flexbox-react';
import background from "../assets/backgroundplain.png"
import '../pages/pages.css'
import Methoditems from '../components/Methoditems';

const Methodology = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
};
  // const statdata = [
  //   {Method:"Pairwise Plots",Purpose:"Check for linearity and outliers",Significance:"Determining if linear regression is suitable & investigating if outliers are natural/non-natural"},
  //   {Method:"Correlation Coefficient",Purpose:"Determine correlation strength between independent and dependent features",Significance:"Able to remove features that are not correlated with emissions"},
  //   {Method:"Variance Inflation Factor (VIF)",Purpose:"Detect multicollinearity",Significance:"Able to remove features that cause multicollinearity in dataset"},
  //   {Method:"One-way ANOVA",Purpose:"Determine statistical significance of categorical features",Significance:"Able to remove categorical features that are not statistaically significant"},
  // ]
  // // const features = [
  // //   {Financial:"Revenue",Operational:"Energy Consumption",Categorical:"Region", Others:"ESG Rating"},
  // //   {Financial:"Total Asset",Operational:"Headcount",Categorical:"Subsector"},
  // //   {Financial:""}
  // ]
  return (
    <div style={style}>
      <h2 style={{paddingTop:"20px"}}>Methodology</h2>
      <div class="method-content">
        <Methoditems/>
      </div>
    </div>
 
  )
}

export default Methodology