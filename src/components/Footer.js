import {Instagram, Linkedin, Twitter, Youtube} from 'lucide-react'
import {Facebook} from 'lucide-react'
const Footer =()=> {
  return (
    <>
        <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">HomeStyle designing</span>
        </div>
        <div class="media-icons">
          <a href="#"><i><Facebook /> </i></a>
          <a href="#"><i><Twitter/></i></a>
          <a href="#"><i><Instagram/> </i></a>
          <a href="#"><i><Linkedin/></i></a>
          <a href="#"><i><Youtube/></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><a href="#">Living design</a></li>
          <li><a href="#">Garden design</a></li>
          <li><a href="#">Kitchen design</a></li>
          <li><a href="#">Bedroom design</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Courses</li>
          <li><a href="#">Architecture</a></li>
          <li><a href="#">interior designing</a></li>
          <li><a href="#">painting</a></li>
          <li><a href="#">carving</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">HomeStyle</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer;