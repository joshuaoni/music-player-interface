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
    {name: 'Jail', duration: '4:57', album: 'donda'},
    {name: 'Off The Grid', duration: '2:23', album: 'donda'},
    {name: 'Hurricane', duration: '3:41', album: 'donda'},
    {name: 'Jonah', duration: '7:23', album: 'donda'},
  ],
  [
    {name: 'Koni Baje', duration: '3:56', album: 'outside'},
    {name: 'Jidenna', duration: '3:01', album: 'outside'},
    {name: 'More Life', duration: '1:03', album: 'outside'},
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
