import Menu from "../components/menu.jsx"
import Footer from "../components/Footer.jsx"
import Peliculas from "../components/Peliculas.jsx"
import Slider from "../components/slider.jsx"



const Home = () => {
  return (
    
  
        
         <div>
        <Menu/>
        <h1>Nuestra Coleccion</h1>
        <Slider/>
        <Peliculas/>
        <Footer/>
        </div>
  )
}

export default Home