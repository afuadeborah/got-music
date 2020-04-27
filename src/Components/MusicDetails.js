import React, { Component } from 'react';
import axios from 'axios';


class MusicDetails extends Component {
    constructor (){
        super ()

        this.state = {
            topAlbums: [],
        }
    }

    componentDidMount (){
        const apiKey = "a0b4a2a68217ad3b52fe53e7b7ba0679";
        // Second call to grab each album
        // Move this to a function for a search
        axios({
            url: 'http://ws.audioscrobbler.com/2.0/',
            method: 'GET',
            responseType: 'json',
            params: {
                api_key: apiKey,
                method: 'artist.getTopAlbums',
                artist: 'rihanna',
                limit: '20',
                format: 'json'
            }
        }).then((response) => {
            const albums = response.data.topalbums.album;
      
            this.setState({
                topAlbums: albums,
            })

            console.log(albums);
        })
    }

    render (){
        return (

            <section className="top-albums">
                {this.state.topAlbums.map((album, index)=> {

                    return (
                        <div className="album-container" key={index}> 
                            <img src={album.image[3]["#text"]}/>
                            <p>{album.name}</p>
                        </div>
                    )
                })}
                 

            </section>
        );
    }
}






export default MusicDetails;
