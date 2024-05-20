import React, { useEffect } from 'react'
import AOS from 'aos';
import './AboutUs.scss'
function WhoWeAre() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="whoWeAre">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right"
                        data-aos-duration="1000">
                            <div className="imgBlock">
                                <img src="/images/whoWeAre.svg" alt="whoWeAre" />
                                <div className="card">
                                    <h2>25<b>+</b></h2>
                                    <p>Year Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left"
                        data-aos-duration="1000">
                            <div className="content">
                                <span>Who we are</span>
                                <h2>A creation that suits 
                                    your personality.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <ul>
                                    <li>
                                        <img src="/images/we1.svg" alt="whoWeAre" />
                                         <div className="block">
                                            <h4>Trusted furniture store</h4>
                                            <p>Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec</p>
                                         </div>
                                    </li>
                                    <li>
                                        <img src="/images/we2.svg" alt="whoWeAre" />
                                         <div className="block">
                                            <h4>Professional Services</h4>
                                            <p>Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec</p>
                                         </div>
                                    </li>
                                    <li>
                                        <img src="/images/we3.svg" alt="whoWeAre" />
                                         <div className="block">
                                            <h4>100% Safe transactions</h4>
                                            <p>Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec</p>
                                         </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WhoWeAre
