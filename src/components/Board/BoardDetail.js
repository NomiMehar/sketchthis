import React from 'react'
import './Board.scss'
import BoardAccordion from './BoardAccordion';
const ImageBlock = ({ id, imageUrl, altText }) => {
    return (
        <div className="block">
            <span>{id}</span>
            <img src={imageUrl} alt={altText} />
        </div>
    );
};
const images = [
    { id: 1, src: '/images/b1.svg', alt: 'Description of image 1' },
    { id: 2, src: '/images/b2.svg', alt: 'Description of image 2' },
    { id: 3, src: '/images/b3.svg', alt: 'Description of image 3' },
    { id: 4, src: '/images/b4.svg', alt: 'Description of image 4' },
    { id: 5, src: '/images/b5.svg', alt: 'Description of image 5' },
    { id: 6, src: '/images/b6.svg', alt: 'Description of image 6' },
    { id: 7, src: '/images/b7.svg', alt: 'Description of image 7' },
    { id: 8, src: '/images/b8.svg', alt: 'Description of image 8' },
    { id: 9, src: '/images/b9.svg', alt: 'Description of image 9' },
    { id: 10, src: '/images/b10.svg', alt: 'Description of image 10' },
    { id: 11, src: '/images/b11.svg', alt: 'Description of image 11' }
];

function BoardDetail() {
    return (
        <React.Fragment>
            <div className="boardDetails">
                <div className="container">
                    <div className="title" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h2>Mary’s Board</h2>
                        <p>Your new space in just <b style={{ color: "#000" }}>3 steps</b>. What? Yes, 3 steps and we will do the rest.</p>
                    </div>
                    <div className="innerDetails">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="texture">
                                    <div className="card">
                                        <p>Textures</p>
                                        <div className="block">
                                            <div className="imgBlock"><img src="/images/tx1.svg" alt="texture" /></div>
                                            <div className="imgBlock"><img src="/images/tx2.svg" alt="texture" /></div>
                                            <div className="imgBlock"><img src="/images/tx3.svg" alt="texture" /></div>
                                            <div className="imgBlock"><img src="/images/tx4.svg" alt="texture" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="colorPelete">
                                    <div className="block">
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                        <div className="card">
                                            <span></span>
                                            <p>Color</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="details">
                                    <img src="/images/livingRoom.svg" alt="livingRoom" />
                                    <h4>Your Space Inspiration </h4>
                                    <p>Welcome to Sketch-This, your one stop destination for all your home design needs.  We understand that furnishing your space is not just about acquiring pieces, it’s about crafting an environment that reflects your identity. Welcome to Sketch-This, your one stop destination for all your home design needs.  We understand that furnishing your space is not just about acquiring pieces, it’s about crafting an environment that reflects your identity.</p>
                                    <p>Welcome to Sketch-This, your one stop destination for all your home design needs.  We understand that furnishing your space is not just about acquiring pieces, it’s about crafting an environment that reflects your identity. Welcome to Sketch-This, your one stop destination for all your home design needs.  We understand that furnishing your space is not just about acquiring pieces, it’s about crafting an environment that reflects your identity.</p>
                                    {/* <p>Welcome to Sketch-This, your one stop destination for all your home design needs.  We understand...</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="imgBoard">
                            {images.map(image => (
                                <ImageBlock key={image.id} id={image.id} imageUrl={image.src} altText={image.alt} />
                            ))}
                        </div>
                        <BoardAccordion />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BoardDetail
