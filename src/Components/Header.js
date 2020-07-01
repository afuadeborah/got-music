import React from 'react';


const Header = () => {
    return (
        <header>
            <nav>
            
                <h1>got music?</h1>

                <div tabindex="0" class="hamburger">

                    <label class="visually-hidden" for="ham-check">Open menu</label>
                    <input type="checkbox" name="hamburger" id="ham-check" class="ham-input"/>

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul class="top-nav" id="ham">
                        <li tabindex="0" class="ham-link">
                            <a href="#home">Home</a>
                        </li>
                        <li tabindex="0" class="ham-link">
                            <a href="#playlist">Playlist</a>
                        </li>

                        <li tabindex="0" class="ham-link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                </div>

            </nav>
  
        </header>
    );
}




export default Header;