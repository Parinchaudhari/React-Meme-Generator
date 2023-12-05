import React from 'react'
import '/index.css'
import meme from './imgs/meme.png'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container-fluid">
                    <img src={meme} alt="" height="50px" width="50px"/>
                    <a className="navbar-brand text-light fs-4 mx-2" href="#">Meme-Generator</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light mt-2" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}