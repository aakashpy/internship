import React from 'react'
import HeaderIntro from './HeaderIntro'
import HeaderImgYt from './HeaderImgYt'
import Shop from './Shop'
import Carousel from './Carousel'
const Maincontent = () => {
    return (
        <div >
            <HeaderIntro/>
            <hr/>
            <HeaderImgYt/>
            <hr/>
            <Shop/>
            <hr/>
            <Carousel/>
        </div>
    )
}
export default Maincontent
