import React, { Component } from 'react';

import Playlist from './Playlist.js';
import '../styles/App.css';
import '../styles/index.css';
import PlaylistForm from './PlaylistForm.js';
import NavBar from './NavBar.js'


class App extends Component {
  render() {
    return (

        <div>
             <NavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="column">
                        <PlaylistForm/>
                        </div>
                        <div className="column">
                        <Playlist/>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}

export default App;
