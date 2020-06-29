import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

// Each individual album
const Album = ({album, playlist}) => {
    // destructure album parameter as a prop to be used in the search function
    return (
        
        <div className="album-container"> 
                                
            <img src={album.image === '' ? 'https://imgur.com/rrF0ZYG'
            :
            album.image} alt={album.title}/>

            <div className="like-album">

                <p title="Click heart to add to collection">{album.title}
                </p>
                {/* On click, we want to access the addtoPlaylist function in the Search component */}
                <AiOutlineHeart onClick={() => playlist(album)}/>

            </div>
        </div>
    )
}



export default Album;

