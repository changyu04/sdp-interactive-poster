import background from "../assets/background3.JPEG"


const Home = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
}
  return (
    <div style={style}>
      <h1 style={{paddingTop:'130px'}}>Net Zero Emissions Estimation Research</h1>
      <p style={{padding:"40px"}}></p>
      <img style={{width:485,height:200, marginRight:50}} src={require('../assets/scblogo.png')}></img>
      <img style={{width:450,height:200}} src={require('../assets/nuslogo.png')}></img>
      <h4 style={{paddingTop:"70px", color:"black", fontWeight:500 }}>
      Group Members: Cindy Ursia, Lim Chang Yu, Justin Hong, Tan Qi Yun, Yan Jie
      </h4>
      <h4 style={{paddingTop:"10px", color:"black", fontWeight:500 }}>
      Department Supervisors: E/P Ang Beng Wah, A/P Ng Tsan Sheng, Adam
      </h4>
      <h4 style={{paddingTop:"10px", color:"black", fontWeight:500 }}>
      Industrial Supervisors: Teo Mun Ling, Jillian, Li Shu Kai, Robert
      </h4>
    </div>
 
  )
}

export default Home
