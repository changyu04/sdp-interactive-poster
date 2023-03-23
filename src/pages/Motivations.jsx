import React from 'react'
import background from "../assets/backgroundplain.png"
//import Flexbox from 'flexbox-react';
import Motivation from '../components/Motivation';
import '../pages/pages.css'

const Motivations = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
}
  return (
    <div style={style}>
      <h1 style={{paddingBottom:"50px"}}>Project Motivations</h1>
      <text style={{fontSize:20, fontWeight:'500', paddingTop:'70px',marginRight:445,paddingBottom:"10px"}}>Industry Outlook</text><text style={{fontSize:20, fontWeight:'500',paddingTop:'70px' ,paddingBottom:"10px", marginRight:130}}>Current Efforts</text><text style={{fontSize:20, fontWeight:'500',paddingTop:'70px' ,paddingBottom:"10px",marginLeft:350,marginRight:55}}>Goals</text>
      <p></p>
      <img style={{paddingTop:"20px", width:500,height:320, marginRight:50}} src={require('../assets/outlook.png')}></img>
      <img style={{paddingTop:"20px", width:500,height:250, marginLeft:25,marginRight:25}} src={require('../assets/current.png')}></img>
      <img style={{paddingTop:"20px", width:500,height:280, marginLeft:50}} src={require('../assets/goals.png')}></img>
      <div class="moti-content" style={{marginRight:200}}>
        <Motivation/>
      </div>
      <p></p>
    </div>
 
  )
}

export default Motivations