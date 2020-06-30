import React from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';


const Playlist = ({userList, remove}) => {

    return (

        <div className="user-album">

            <div className="selected-album"> 
            
                <div className="img-container">
                    <img src={userList.name.smallImage} alt={userList.name.title}/>
                </div>

                <div className="list-info">
                    <h5>{userList.name.title}</h5>
                    <p className="artist-name">{userList.name.artist}</p>
                    <a className="listen"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    tabIndex="0" 
                    href={userList.name.url}>
                    <FaPlay /> Listen to {userList.name.title} on LastFm</a>
                </div>

            </div>

            <div className="remove-album">
                <FaTimes className="delete" title={'Remove album from playlist'} onClick={() => remove(userList.album)}/>
            </div>

        </div>
    )
}

export default Playlist

