// import { CalendarDays } from 'lucide-react';
import img1 from '../assets/images/design2.jpg'
import img2 from '../assets/images/installation_days.png'
import img3 from '../assets/images/design_experts.png'
import img4 from '../assets/images/homes_completed.png'
import img5 from '../assets/images/material_warranty.png'
import img6 from '../assets/images/himage1.jpg'
import img7 from '../assets/images/himage2.jpg'
import img8 from '../assets/images/himage3.jpg'
import img9 from '../assets/images/himage4.jpg'

const Home =()=> {
    return (
        <>
           <div className="body1">
            <div classname="image" >
               <img src = {img1} alt='no image' className="image1"/>
            </div>
            <div className='par'>
            <div class="why-homelane" >
                <section class="idk">
                    <div class="h-title">Why HomeStyle?</div>
                    <div class="h-icons">
                        <img src={img2} alt='no image' className='hic'/>
                        <img src={img3} alt='no image' className='hic'/>
                        <img src={img4} alt='no image' className='hic'/>
                        <img src={img5} alt='no image' className='hic'/>
                    </div>
                </section>
            </div> 
            </div>
            <div class="caro1" >
                <section class="id">
                    <div class="h2-title">Home Design Products</div>
                    <div class="h2-icons">
                        <img src={img6} alt='no image' className='hic1'/>
                        <img src={img7} alt='no image' className='hic1'/>
                        <img src={img8} alt='no image' className='hic1'/>
                        <img src={img9} alt='no image' className='hic1'/>
                    </div>
                </section>
            </div> 
           </div>
        </>
    )
}
export default Home;