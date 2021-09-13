import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid my-3 p-4 text-center"style={{backgroundColor:"black",color:"white"}}>
            <footer >

    <div>
      <h5>BIO.fm</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
      </ul>
    </div>
    <p class="text-center text-muted">© 2021 Company, Inc</p>
  </footer>
        </div>
    )
}

export default Footer
