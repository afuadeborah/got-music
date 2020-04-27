import React, { Component } from 'react';

class Search extends Component(){
    constructor (){
        super();
        this.state = {
            artistSearch: "",
        }
    }

    render (){
        return(

            <div className="wrapper">

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
                    title="Search by artist name">
                    
                    </input>

                    <button type="submit">Search</button>
                
                </form>

            </div>

        );


    }
}


export default Search;

// create ternary for case where there's no record of artist
{/* // onChange={this.handleChange}
// value={this.state.searchInput}> */}
{/* onSubmit={this.handleFormSubmit */}