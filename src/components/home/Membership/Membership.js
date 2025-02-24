import React,{useEffect} from 'react'
import './Membership.scss'
import AOS from 'aos';
function Membership() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <React.Fragment>
      <div className="membership">
        <div className="container">
            <h2 data-aos="fade-up"
    data-aos-duration="1000">Get Discount for Membership!</h2>
            <p data-aos="fade-up"
    data-aos-duration="1000">Every new membership will get a 50% discount . Join our design community</p>
            <div className="formGroup" data-aos="fade-down"
    data-aos-duration="1000">
                <input type="text" placeholder='Enter your Email Address' />
                <button>Submit <img src="/images/arrowRight.svg" alt="arrowRight" /></button>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Membership
