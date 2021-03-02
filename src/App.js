import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { getSongs } from './redux/song/song.action'
import Sidebar from './components/sidebar/sidebar.component'
import { Switch, Route } from 'react-router-dom'



import MainPage from './pages/main-page/main-page.component'
import PlaylistPage from './pages/playlist-page/playlist-page.component'

class App extends React.Component {
  
  componentDidMount(){
    const { getSongs } = this.props
    

    fetch('https://cors.bridged.cc/https://api.deezer.com/chart')
      .then(res => res.json())
      .then(data =>  getSongs(data))
  }

  render(){
    return (
      <div className='App'>
        <Sidebar /> 
        <Switch>
          {/* <MainPage /> */}
          <Route exact path='/' component={ MainPage } />
          <Route exact path='/playlists/:playlist'  component={ PlaylistPage } />
        </Switch>        
      </div>
    )
  }

}


const mapDispatchToProps = dispatch => ({
  getSongs: songs => dispatch(getSongs(songs)),
})
 


export default connect(null, mapDispatchToProps)(App);
