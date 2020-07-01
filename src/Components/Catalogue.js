import React, { Component } from 'react';
import axios from 'axios';

class Catalogue extends Component {
    constructor (){

        super ();

        this.state = {

            // Holds all artists
            artists: []
        }
    }

    componentDidMount() {
        const apiKey = "a0b4a2a68217ad3b52fe53e7b7ba0679";
    
        // First API call to grab top artists
        axios ({
            url: 'http://ws.audioscrobbler.com/2.0/',
            method: 'GET',
            responseType: 'json',
            params: {
                api_key: apiKey,
                method: 'chart.getTopArtists',
                limit: '10',
                format: 'json'
            } 
        }).then ((response) => {
            const artistArray = response.data.artists.artist;
    
            // Set state to the whole array to be manipulated later in render
            this.setState({
                artists: artistArray
            })

            console.log(artistArray);
         
        })
    }

    render (){
        
        return (
            <section className="top-artists">
                
                <h2>Today's Top 10</h2>

                <div className="artist-list-container">
                    {this.state.artists.map((artist, index) => {
                        return (

                            <div className="artist-list" key={index}>
                                <div className="rank-container">
                                    <p className="rank">{index + 1}</p>
                                </div>

                                <a href={`${artist.url}`}
                                className="artist-container"
                                target="_blank" 
                                rel="noopener noreferrer"
                                title={`See ${artist.name}'s albums`}
                                tabIndex="0">
                                    <p className="artist"> {artist.name}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>

            </section>
        );
    }
}



export default Catalogue;

