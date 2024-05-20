import React, { useEffect } from 'react'
import AOS from 'aos';

function ConvertHome() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="convertHome">
                <div className="container">
                    <div className="col-lg-6" data-aos="fade-left"
                        data-aos-duration="1000">
                        <div className="content">
                            <h3>Converting home into a
                                better place to live</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="more">Discover More</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <img className='convert' src="/images/convert.svg" alt="convert" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ConvertHome
