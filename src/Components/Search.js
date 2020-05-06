import React, { Component } from 'react';
// import axios from 'axios';

class Search extends Component {

    constructor (){

        super();

        this.state = {
            artistSearch: "",
        }
    }


    // Track value typed in search bar
    handleChange = (e) => {
        this.setState({
            artistSearch: e.target.value
        })

        console.log(this.state.artistSearch)

    }






    render (){
        return(
            
            <section className="search">
                <div className="wrapper">

                    <h2>Got an artist you want to hear?</h2>

                    <form className="search-albums" action="submit">
            
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

        );


    }
}


export default Search;

