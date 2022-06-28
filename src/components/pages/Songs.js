import React from 'react';
import { useParams } from 'react-router-dom';

const Songs = ({playlists, albums, settingPlaylists, settingDuration, settingName}) => {
    const {id} = useParams();
    const i = Number(id)

    return (
        <div className='songs'>
            <div className='title'>
                <span>Title</span><span>Duration</span>
            </div>
            {albums[i].map(({name, duration})=>{
                return (
                    <div 
                    className='list-album' 
                    key={name}
                    onClick={()=>{
                            settingName(name);
                            settingDuration(duration)
                        }}
                        >
                        <div className='txt'>
                            <span>{name}</span>
                            <span> {duration}</span>
                        </div>
                        <select
                            onChange={(e)=>{
                                if (e.target.value !== 'Add to playlist') {
                                    console.log(e.target.value)
                                    settingPlaylists(prev => {
                                        console.log(prev)
                                        return prev.map(obj => {
                                            if (obj.name === e.target.value) {
                                                return {...obj, songs:[...obj.songs, {name: name, duration: duration}]}
                                            }
                                            return obj;
                                        })
                                    })
                                }
                            }}
                        >
                            {playlists.map((playlist)=>{
                                return(
                                    <option value={playlist.name}>{playlist.name}</option>
                                )
                            })}
                        </select>
                    </div>
                )
            })}
            <h2 className='instruct'>Create playlist in the playlist section, come back here and add songs to your playlist, then go back to view your songs in your playlists!</h2>
        </div>
    );
}
 
export default Songs;