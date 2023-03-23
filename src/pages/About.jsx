
import background from '../assets/backgroundplain.png'
import Aboutitems from '../components/Aboutitems'


const About = () => {
  const style = {
    //Now working
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
}
  return (
    <div style={style}>
      <h1>About Us</h1>
      <div class="about-content">
        <Aboutitems/>
      </div>
    </div>
 
  )
}

export default About