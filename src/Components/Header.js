import React from 'react'

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >  {/*change color of navbar*/}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BIO.fm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="d-flex nav-item">
                                <a className="nav-link active" href="#">Sign Out</a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </nav>
    )
}

export default Header
