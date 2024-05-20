import React,{useEffect} from 'react';
import './Steps.scss';
import AOS from 'aos';

function Steps() {
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <React.Fragment>
        <div className="Steps">
            <div className="container">
                <div className="title" data-aos="fade-up"
    data-aos-duration="1000">
                    <h2>How it works?</h2>
                    <p>Your new space in just <b style={{color:"#000"}}>3 steps</b>. What? Yes, 3 steps and we will do the rest.</p>
                </div>
                <img data-aos="fade-down"
    data-aos-duration="1000" src="/images/steps.png" alt="steps" />
            </div>
        </div>
    </React.Fragment>
    );
}

export default Steps;
