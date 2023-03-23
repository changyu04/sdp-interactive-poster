import {useState, useRef} from 'react'
import background from "../assets/backgroundhalf.png"
//import Flexbox from 'flexbox-react';
import '../pages/pages.css'
// import Button from "@mui/material/Button";
// import TextField from '@mui/material/TextField';
// import { Select, MenuItem } from '@material-ui/core';


const Calculator = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
  }
  const [message, setMessage] = useState('');
  const nameref = useRef(undefined);
  const revref = useRef(undefined);
  const enconref = useRef(undefined);
  const headcountref = useRef(undefined);
  const subref = useRef(undefined);
  const regionref = useRef(undefined);
  const calculate = (event) => {
    event.preventDefault();
    let name = nameref.current.value;
    let Rev = (revref.current.value - 44.67)/63.18;
    let EnCon = (enconref.current.value - 272.06)/477.48;
    let Headcount = (headcountref.current.value - 30401.42)/74759.91;
    let Subsector = subref.current.value;
    let Region = regionref.current.value;
    let Emission = 17.4374 + 11.8991*Rev + 10.26*EnCon + 4.4345*Headcount 
    if (Subsector == 'Gas Distribution') {
      Emission += 9.7373
    }
    if (Subsector == 'Gas Extraction') {
      Emission -= 1.3651
    }
    if (Subsector == 'Oil Extraction') {
      Emission += 3.0114
    }
    if (Subsector == 'Petroleum Refinery') {
      Emission += 5.3446
    }
    if (Subsector == 'Supporting Activities') {
      Emission += 0.7093
    }
    if (Region == 'North America') {
      Emission -= 2.4005
    }
    if (Region == 'South America') {
      Emission += 19.0622
    }
    if (Region == 'China') {
      Emission -= 7.1914
    }
    if (Region == 'Europe') {
      Emission -= 8.0651
    }
    if (Region == 'Russia') {
      Emission += 5.1968
    }
    if (Region == 'Australia') {
      Emission += 8.2958
    }
    if (Region == 'India') {
      Emission += 2.5396
    }
    // event.target.reset();
    Emission = Emission.toFixed(2)
    alert(`In 2021, ${name} emitted ${Emission}MMt of CO2!`)
  }
  return (
    <div style={style}>
      <h2 style={{paddingTop:"80px", paddingLeft:"950px",paddingBottom:"20px"}}>Estimate the Emissions of a Company!</h2>
      <img style={{width:350,height:300, marginLeft:950}} src={require('../assets/co2.jpg')}></img>
      <h5 style={{paddingLeft:"950px",paddingTop:"30px",paddingBottom:"20px"}}>First, more about the company (2021 Data):</h5>
      <form onSubmit={calculate}>
        <input type="text" id="companyname" placeholder='Company Name:' className='inputs' ref={nameref}></input>
        <p></p>
        <input type="number" id="Revenue" placeholder='Revenue:' className='inputs' ref={revref}></input>
        <p></p>
        <input type="number" id="Energy Consumption" placeholder= 'Energy Consumption' className='inputs' ref={enconref}></input>
        <p></p>
        <input type="number" id="Headcount" placeholder='Headcount:' className='inputs' ref={headcountref}></input>
        <p></p>
        <select name="Subsector" id="Subsector" className='inputs' ref={subref}>
          <option selected="Subsector">Subsector</option>
          <option value="Gas Distribution">Gas Distribution</option>
          <option value="Gas Extraction">Gas Extraction</option>
          <option value="Oil Extraction">Oil Extraction</option>
          <option value="Petroleum Refinery">Petroleum Refinery</option>
          <option value="Supporting Activities">Supporting Activities</option>
        </select>
        <p></p>
        <select name="Region" id="Region" className='inputs' ref={regionref}>
          <option selected="Region">Region</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="China">China</option>
          <option value="Europe">Europe</option>
          <option value="Russia">Russia</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
        <p></p>
        <button style={{width:"130px", marginLeft:"950px"}} type="submit">Calculate</button>
        <button style={{width:"130px", marginLeft:"950px",marginTop:"10px"}} type="reset">Reset</button>
        <h1></h1>
      </form>
    </div>
 
  )
}

export default Calculator