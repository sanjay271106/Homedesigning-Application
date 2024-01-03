import Side from './Side'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import '../assets/cssfiles/Home.css'
import '../assets/cssfiles/Nav.css'
import '../assets/cssfiles/side.css'
import '../assets/cssfiles/Footer.css'

const Body =()=> {
    return (
        <>
        <Nav/>
        <Side/>
        <Home/>
        <Footer/>
        </>
    )
}
export default Body;