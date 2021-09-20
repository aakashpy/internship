import React from 'react'


const HeaderIntro = () => {

    let profilestyle={
        
    }
    return (
        <div className="container text-center" id="bg-image">
            <div className="d-flex flex-column" >
                <img id="bg-profile"src='https://i.ibb.co/XbcbLHP/profilepic.jpg' style={profilestyle} />
                <div className="d-flex"><h5 style={{color:"white"}}>Lilly Sabri</h5>
                <h6 className="mx-2"><span className="badge rounded-pill bg-success">Pro</span></h6></div>
                <p className="d-flex"style={{color:"white"}}>bio.fm/lillysabri</p>
            </div>
            <br/>
            <div id="hero-description">
            <p>There is no shortcut. It takes time to create a better,stronger version of yourself.</p>
            </div>
        </div>
    )
}
export default HeaderIntro
