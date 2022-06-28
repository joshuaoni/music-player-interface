import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistDetails = ({playlists, settingDuration, settingName}) => {
    const {index} = useParams();
    const i = Number(index)

    return (
        <div className='playlist-details'>
            <h1>{playlists[i].name}</h1>
            {playlists[i].songs.length === 0 ?
            <h2>No songs in this playlist</h2> :
            playlists[i].songs.map((song, idx)=>{
                console.log({pooo:song})
                return(
                    <div 
                        className='list-album' 
                        key={idx}
                        onClick={()=>{
                            settingName(song.name);
                            settingDuration(song.duration)
                        }}
                    >
                        <span>{song.name}</span><span>{song.duration}</span>
                    </div>
                )
            })}
        </div>
    );
}
 
export default PlaylistDetails;