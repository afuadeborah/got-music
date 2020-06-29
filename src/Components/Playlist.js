import React from 'react';
import { FiXCircle } from 'react-icons/fi';

const Playlist = ({userList, key, remove}) => {

    return (
        //  Stuff here
        <div className="user-album">

            <div className="selectedAlbum"> 
            
                <div className="img-container">
                    <img src={userList.name.smallImage} alt={userList.name.title}/>
                </div>

                <div className="list-info">
                    <h5>{userList.name.title}</h5>
                    <a href={userList.name.url}>Go listen to {userList.name.title} on LastFm</a>
                </div>

            </div>

            <div className="remove-album">

                <FiXCircle onClick={() => remove(userList)}/>
                <p className="delete">Remove album from playlist</p>

            </div>

        </div>
    )
}

export default Playlist

