import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Albums = ({albums}) => {
    return (
        <div className='albums'>
            <h2 className='tt'>Albums</h2>
            {albums.map((album, i)=>{
                return (
                    <Link to={`${i}`}>
                        <div className='list-album' key={album[0].album}>
                            <h2>{album[0].album}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
 
export default Albums;