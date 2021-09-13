import React from 'react'

const Carousel = () => {
    return (
        <div className="container text-center" style={{ maxWidth: "850px"}}>
            <div className="row">
                <div className="col-sm-12 col-md-6 my-3">
                    <div><h3>BUY GYMSHARK CLOTHES using my link!</h3></div>
                    <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-1.jpg'} className="d-block w-100" alt="image" />
                                
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-2.jpg'} className="d-block w-100" alt="image" />
                                
                            </div>
                            <div className="carousel-item">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-3.jpg'} className="d-block w-100" alt="image" />
                                
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <button type="button" className="my-2 btn btn-info">Buy Gorgeous Gym Clothing</button>
                </div>
                <div className="col-sm-12 col-md-6 my-3">
                <div><h3>BUY LEAN RESISTANCE BANDS using my link!</h3></div>
                <div id="carouselExampleDark2" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-4.jpg'} className="d-block w-100" alt="image"style={{height:"478px"}} />
                                
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-5.jpg'} className="d-block w-100" alt="image" style={{height:"478px"}}/>
                                
                            </div>
                            <div className="carousel-item">
                                <img src={process.env.PUBLIC_URL + 'images/shop-image-6.jpg'} className="d-block w-100" alt="image"style={{height:"478px"}} />
                                
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <button type="button" className="btn btn-info" id="diff-btn">Buy Lean Resistance Bands</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
