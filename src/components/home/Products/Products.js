import React, { useState,useEffect } from 'react';
import './Products.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const tabs = [
    { id: 'all', title: 'All' },
    { id: 'favorites', title: 'Favorites' },
    { id: 'table', title: 'Table' },
    { id: 'sofa', title: 'Sofa' },
    { id: 'chair', title: 'Chair' },
    { id: 'loveseat', title: 'Loveseat' },
    { id: 'sectional', title: 'Sectional' },
    { id: 'desk', title: 'Desk' },
    { id: 'decor', title: 'Decor' },
    { id: 'rugs', title: 'Rugs' },
    { id: 'curtains', title: 'Curtains' }
];

const cards = [
    {
        id: 1,
        category: 'favorites',
        title: 'Handpicked Sofa Collections',
        price: '36',
        image: '/images/blog1.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    {
        id: 2,
        category: 'table',
        title: 'Elegant Dining Tables',
        price: '97',
        image: '/images/blog2.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    {
        id: 3,
        category: 'sofa',
        title: 'Modern Sofa Designs',
        price: '35',
        image: '/images/blog3.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    {
        id: 4,
        category: 'chair',
        title: 'Luxury Chairs',
        price: '65',
        image: '/images/blog4.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    {
        id: 5,
        category: 'loveseat',
        title: 'Comfortable Loveseats',
        price: '88',
        image: '/images/blog1.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    {
        id: 6,
        category: 'sectional',
        title: 'Spacious Sectionals',
        price: '54',
        image: '/images/blog2.png',
        description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    },
    // {
    //     id: 7,
    //     category: 'desk',
    //     title: 'Office Desks for Professionals',
    //     price: '89',
    //     image: '/images/blog3.png',
    //     description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    // },
    // {
    //     id: 8,
    //     category: 'decor',
    //     title: 'Home Decor Essentials',
    //     price: '45',
    //     image: '/images/blog4.png',
    //     description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    // },
    // {
    //     id: 9,
    //     category: 'rugs',
    //     title: 'Colorful and Comfy Rugs',
    //     price: '23',
    //     image: '/images/blog1.png',
    //     description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    // },
    // {
    //     id: 10,
    //     category: 'curtains',
    //     title: 'Luxury Curtains for Every Home',
    //     price: '50',
    //     image: '/images/blog2.png',
    //     description: 'Some description goes here yes. Some description goes here yes. Some description goes here yes. '
    // }
];
function Products() {
    const [selectedTab, setSelectedTab] = useState('all');
    const filteredCards = cards.filter(card => selectedTab === 'all' ? true : card.category === selectedTab);
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <React.Fragment>
        <div className="products">
            <div className="container">
                <div className="title" data-aos="fade-up"
    data-aos-duration="1000">
                    <h2>Our Selections</h2>
                    <p>Just browsing. Search by product and make your own combinations.</p>
                </div>
                <div className="tab-buttons" data-aos="fade-down"
    data-aos-duration="1000">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setSelectedTab(tab.id)}  className={selectedTab === tab.id ? 'active' : ''}>
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="productsBlock">
                    {filteredCards.length > 0 ? (
                        <div className="row">
                            {filteredCards.map(card => (
                                <div className="col-lg-4" data-aos="fade-up"
                                data-aos-duration="1000" key={card.id}>
                                    <div className="card">
                                        <div className="head">
                                            <img src={card.image} className='blogImg' alt="blogImg" />
                                            <div className="date">
                                            <p>$ <span>{card.price}</span></p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                            <Link to="/board" className='readMore'>Select</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-data-found">
                            <h3>No data found</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Products;
