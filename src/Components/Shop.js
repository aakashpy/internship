import React from 'react'

const Shop = () => {
    return (
        <div className="container text-center">
            <div className="row"id="slider">
                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3" style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='https://i.ibb.co/Cs6YXSS/cookbooks.jpg'} className="img-fluid rounded-start" alt="image" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Get my Cookbook!</h5>
                                    <p className="card-text">The Anti-Inflammatory & Immunity Boosting Cookbook
                                        £9.99 Shipping calculated at checkout</p>
                                    <buton type="button" className="btn btn-info">Buy now</buton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6" >
                <div className="card mb-3" style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='https://i.ibb.co/tHdMwhk/app-image.jpg' className="img-fluid rounded-start" alt="image" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">LEAN</h4>
                                    <p className="card-text">Every Sunday I send out a NEW timetable for the week to the #LeanwithLilly familia! When you subscribe, you’ll get:</p>
                                    <buton type="button" className="btn btn-info">Join now</buton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
