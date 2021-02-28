import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { getSongs, getTracks } from './redux/song/song.action'


import MainPage from './pages/main-page/main-page.component'

class App extends React.Component {
  
  componentDidMount(){
    const { getSongs, getTracks } = this.props
    

    fetch('https://cors.bridged.cc/https://api.deezer.com/chart')
      .then(res => res.json())
      .then(data =>  getSongs(data))

    // fetch('https://cors.bridged.cc/https://api.deezer.com/playlist/757807/tracks')
    //   .then(res => res.json())
    //   .then(data => getTracks(data))
  }

  render(){
    return (
      <div>
        <MainPage />
      </div>
    )
  }

}


const mapDispatchToProps = dispatch => ({
  getSongs: songs => dispatch(getSongs(songs)),
  getTracks: tracks => dispatch(getTracks(tracks))
})
 


export default connect(null, mapDispatchToProps)(App);
