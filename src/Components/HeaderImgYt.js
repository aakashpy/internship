import React from 'react'
const HeaderImgYt = () => {
    return (
            <div className="container"id="description"style={{backgroundColor:"#4a4a4a"}}>
                <div className="row">
                    <div className="col-3 col-lg-2">
                        <img src='https://i.ibb.co/2YdNwm9/ytprofile.jpg'} id="ytimg" alt="img"/>
                    </div>
                    <div className="col-9 col-lg-10 text-center" id="ytdescription">
                        <h3 >Lilly Sabri</h3>
                        <p >I’m Lilly Sabri, founder of Lean with Lilly. I’ve been a Chartered...</p>
                        <h4>Over 500 FREE Home Workouts</h4>
                        <button type="button" className="btn btn-danger">Subscribe</button>
                    </div>
                </div>
            </div>
    )
}
export default HeaderImgYt