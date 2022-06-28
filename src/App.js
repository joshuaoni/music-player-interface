import { useState } from 'react'
import Slider from './components/slider/Slider'
import ControlPanel from './components/controls/ControlPanel'
import {Link,  BrowserRouter, Routes, Route}  from 'react-router-dom';
import Albums from './components/pages/Albums';
import Playlists from './components/pages/Playlists';
import Songs from './components/pages/Songs';
import PlaylistDetails from './components/pages/PlaylistDetails';

const data  = [
  [
    {name: 'Koni Baje', duration: '03:56', album: 'Outside'},
    {name: 'Jidenna', duration: '03:01', album: 'Outside'},
    {name: 'More Life', duration: '01:03', album: 'Outside'},
  ],
  [
    {name: 'Maybe', duration: '10:14', album:'Beutiful imperfection' },
    {name: 'Be My Man', duration: '02:13', album:'Beutiful imperfection' },
    {name: 'Bimpe', duration: '04:01', album:'Beutiful imperfection' },
    {name: 'OK OK', duration: '03:09', album:'Beutiful imperfection' },
    {name: 'Ore', duration: '03:33', album:'Beutiful imperfection' },
    {name: 'Broda Ole', duration: '02:59', album:'Beutiful imperfection' },
  ],
  [
    {name: 'Jail', duration: '04:57', album: 'Donda'},
    {name: 'Off The Grid', duration: '02:23', album: 'Donda'},
    {name: 'Hurricane', duration: '03:41', album: 'Donda'},
    {name: 'Jonah', duration: '07:23', album: 'Donda'},
  ],
  [
    {name: 'DNA', duration: '04:00', album:'DAMN' },
    {name: 'YAH', duration: '04:12', album:'DAMN' },
    {name: 'LOYALTY', duration: '03:37', album:'DAMN' },
    {name: 'FEEL', duration: '04:21', album:'DAMN' },
  ]
]

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlists, setPlaylists] = useState([{name:'Add to playlist'}])
  const [albums, setAlbums] = useState(data)
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const settingPlaylists = (arr) => {
    setPlaylists(arr)
    setAlbums(data)
  }

  const settingDuration = (txt) => {
    setDuration(txt)
  }

  const settingName = (txt) => {
    setName(txt)
  }
  
  const play = () => {

    if (!isPlaying) {
      setIsPlaying(true)
      // audio.play
    }

    if (isPlaying) {
      setIsPlaying(false)
      //audio.pause
    }
  }

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/albums' element={<Albums albums={albums}/>} />
        <Route path='/playlists' element={<Playlists playlists={playlists} settingPlaylists={settingPlaylists}/>} />
        <Route path='/albums/:id' element={<Songs settingPlaylists={settingPlaylists} playlists={playlists} settingDuration={settingDuration} settingName={settingName} albums={albums}/>} />
        <Route path='/playlists/:index' element={<PlaylistDetails settingName={settingName} settingDuration={settingDuration} playlists={playlists}/>} />
        <Route path='/' element={
          <>
          <div className='links'>
            <Link to='/albums'><p className='list-album'>Albums</p></Link>
            <Link to='/playlists'><p className='list-album'>Playlists</p></Link>
          </div>
          
          </>
        } />
      </Routes>
      </BrowserRouter>
      <div className='player'>
          <div className='app-container'>
            <h1>{name}</h1>
            <Slider  />
            <ControlPanel
              play={play}
              isPlaying={isPlaying}
              duration={duration}
            />
          </div>
      </div>
    </div>
  )
}

export default App
