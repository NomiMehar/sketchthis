import React, { useEffect } from 'react'
import BlogList from './AllBlogList.json'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function YouMayLike() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="AllBlogLike">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="title">
                                <h2>You May Also Like</h2>
                            </div>
                        </div>
                    </div>
                    <div className="blogs">
                        <div className="row">
                            {
                                BlogList.map((item) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" data-aos="fade-down"
                                            data-aos-duration="1000" key={item.id}>
                                            <div className="BlogList" >
                                                <Link to=""><img className='mainImg' src={item.img} alt={item.alt} /></Link>
                                                <div className="time">
                                                    <p>{item.category}</p>
                                                    <span className='dot'></span>
                                                    <p>{item.time} min read</p>
                                                </div>
                                                <h2>{item.title}</h2>
                                                <p>{item.desc}</p>
                                                <div className="date">
                                                    <p><img src={item.user} alt="bloguser" /> {item.name}</p>
                                                    <span className='dot'></span>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default YouMayLike
