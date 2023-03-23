import React from 'react'
import background from "../assets/backgroundplain.png"
import Resultitems from '../components/Resultitems'
//import Flexbox from 'flexbox-react';
import '../pages/pages.css'

const Results = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
}
  return (
    <div style={style}>
      <h2 style={{padding:"50px"}}>Results & Recommendations</h2>
      <div class="result-content">
        <Resultitems/>
      </div>
    </div>
 
  )
}

export default Results