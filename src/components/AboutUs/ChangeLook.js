import React, { useEffect } from 'react'
import AOS from 'aos';

function ChangeLook() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="changeLook">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content" data-aos="fade-up"
                        data-aos-duration="1000">
                                <h2 className="banner-heading">Change the look of your house,
                                    change the perspective of others</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="more">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChangeLook
