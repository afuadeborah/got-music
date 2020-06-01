import React, { Component } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai';


class Search extends Component {

    constructor (){

        super();

        this.state = {
            // Tracks search input
            artistSearch: "",
            // Results of axios call based on artistSearch
            topAlbums: [], 
            // User selected books for personal lists (FB)
            userList: [],
        }
    }


    // Track value typed in search bar
    handleChange = (e) => {
        this.setState({
            artistSearch: e.target.value
        })

        console.log(this.state.artistSearch)

    }

    // Search for top albums by artist on submit
    handleSubmit = (e) => {
        e.preventDefault()
        this.userSearch()

        // Clear search
        this.setState ({
            artistSearch: ""
        })
        
    }
    
    // Make second axios call to grab artist albums
    userSearch = () => {
        const apiKey = 'a0b4a2a68217ad3b52fe53e7b7ba0679'

        axios({
            url: 'http://ws.audioscrobbler.com/2.0/',
            method: 'GET',
            responseType: 'json',
            params: {
                api_key: apiKey,
                method: 'artist.getTopAlbums',
                artist: this.state.artistSearch,
                limit: '20',
                format: 'json'
            }

        }).then((response) => {
            const albums = response.data.topalbums.album

            const albumName = albums[0].name

            // Set state to searched albums
            this.setState({
                topAlbums: albums,
            })

            console.log(albums)
        })


    }

    // Select album to add to playlist
    addToList = () => {
        // her3
    }

    
    render (){
        return(
            <div className="build-album wrapper">
                <section className="search">

                    <h2>Search an artist</h2>

                    <div className="search-container">

                    <form className="search-albums" action="submit"
                    onSubmit={this.handleSubmit}>
            
                        <label
                        className="sr-only"
                        htmlFor="search">
                        </label>

                        <input 
                        type="search" 
                        placeholder="Enter artist name"
                        id= "search"
                        name="search"
                        aria-label="Search through site content"
                        title="Search by artist name"
                        onChange={this.handleChange}
                        value={this.state.artistSearch}>
                        </input>

                        <button type="submit">Get Music</button>
                
                    </form>
                    
                    </div>
                </section>

                <h3>Build your album collection</h3>

                <section className="top-albums">
                    {this.state.topAlbums.map((album, index)=> {

                        return (
                            <div className="album-container" key={index}> 
                                <img src={album.image[3]["#text"]} alt={album.name}/>
                                <div className="like-album">
                                    <p>{album.name}</p>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                        )
                    })}

                </section>
            </div>
 

        );


    }
}


export default Search;

