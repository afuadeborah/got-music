import React, { Component } from 'react';
import axios from 'axios';
import firebase from "../firebase";


import Album from './Album';
import Playlist from './Playlist';


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

    componentDidMount (){
        // Firebase Setup
        // Access database 
        const dbRef = firebase.database().ref();

        // Listen for any changes in the database and use a callback to get the info
        dbRef.on('value', (response) => {
            // Variable to store new state
            const albumState = []

            // Store response from search to Firebase
            // .val gets us the "values" from the database
            const data = response.val() 

            // Data is an object, so we need a loop to grab each album pushed into the array
            for (let album in data) {

                const albumData = {
                    album: album,
                    name: data[album],
                }

                // Push these values into an array we can access in state
                albumState.push(albumData)
            } 

            // Make this live and able to track by setting this to state
            this.setState ({
                userList: albumState
            })

            console.log(this.state.userList)
        })
    }

    // Track value typed in search bar
    handleChange = (e) => {
        this.setState({
            artistSearch: e.target.value
        })

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

            // Make a copy of the array data we need
            const newState = []

            albums.map(function(album) {
                
                return newState.push({
                    title: album.name,
                    artist: album.artist.name,
                    image: album.image[3]["#text"],
                    smallImage: album.image[2]["#text"],
                    url: album.url,
                })
            })

            // Set state to searched albums            
            this.setState({
                topAlbums: newState,
            })


        }).catch((error) => {

            console.log('No data found.')
        
        })


    }

    // Select album to add to playlist
    addToPlaylist = (album) => {
        // Get firebase
        const dbRef = firebase.database().ref()

        dbRef.push(album)
        

    }


    // Remove album from playlist on click
    removeFromPlaylist = (album) => {
        // Pull off album ftom the child of the root, not the whole root
        const dbRef = firebase.database().ref()

        dbRef.child(album).remove()
    
        
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

                <div className="spacer"></div>

                <h3>Build your album collection</h3>

                <section className="top-albums">
            
                    {/* this.state.topAlbums is an object holding the necessary info for the functional component */}
                    {this.state.topAlbums.map((album, index)=> {
                        return (

                            // If the album title is (null) or "?", don't show anything for that album result, if there's a valid title show the information for that album
                            album.title === "(null)" || album.title === "?" ? ''
                            :
                            // Pass album info and playlists down as an object held in topAlbums from the axios call and if the album exists
                            // We want to be able to click the heart in the Album component and push it to the database held here
                            <Album key={index} album={album} playlist={this.addToPlaylist}/>
                            
                        )
                    })}

                </section>
                
                <div className="spacer"></div>

                <h3 id="playlist">Your Playlist</h3>
                <section  className="user-playlist">

                    <div className="playlist-container">
                        {this.state.userList.map((alb, index) => {
                            
                            return(

                                <Playlist key={index} userList={alb} remove={this.removeFromPlaylist}/>
 
                            )
                            
                        })}

                    </div>

                </section>
                
            </div>
 
        );

    }
}


export default Search;

