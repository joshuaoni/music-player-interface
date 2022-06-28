import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Playlists = ({playlists, settingPlaylists}) => {
    const [listName, setListName] = useState('');
    console.log({ppppp:playlists.length})

    const handleSubmit = (e) => {
        e.preventDefault();

        settingPlaylists([...playlists, {name:listName, songs:[]}])
        setListName('')
    }

    return ( 
        <div className='playlists'>
            {playlists.map((playlist, i)=>{
                console.log({i:i})
                return(
                    <div>
                        {playlist === playlists[0] ? 
                        <div className='list-album label' key={i}>
                            <h3>{playlist.name}</h3>
                        </div> :
                        <Link to={`${i}`}>
                            <div className='list-album' key={i}>
                                <h3>{playlist.name}</h3>
                            </div>
                        </Link>}
                    </div>
                )
            })}
            {playlists.length === 1 ? <h2 className='err'>No playlists  yet</h2> : ''}
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Create Playlist'
                    value={listName}
                    onChange={(e)=>{
                        setListName(e.target.value);
                    }}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

 
export default Playlists;