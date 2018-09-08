import React, { Component } from 'react';
import PlaylistItem from './PlaylistItem.js';

export default class Playlist extends Component {
    constructor(){
        super();
        this.fetchData = this.fetchData.bind(this);

        this.state ={
            songs:[]
        }
        console.log(this.state.songs);
    }

    //below is the fetch call to the playlist api. 
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
          return results.json();
        })
        .then(data => {
            let songsArray = data.map((aSong, index) =>{
                return (<PlaylistItem key={index + 1} aSong={aSong}/>)
            })
          this.setState({songs: songsArray});
        })
    };
              
              
    //lifecycle method: this ensures that the array list is available on page load
              //we make the same fetch call that we make on `fetchData`
    componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
            return results.json();
        })
        .then(data => {
            let songsArray = data.map((aSong, index) =>{
                return (<PlaylistItem key={index + 1} aSong={aSong}/>)
             })
            this.setState({songs: songsArray});
                
            console.log("state: ", this.state.songs); //this is your state of songs
            console.log("props: ", this.props.songs); //this what you have on props
            console.log("variable: ", songsArray); //here is your songsArray
        });
    }

    render(){
        return(
            <div id="all-results">
                <form className="form w6" onSubmit={this.fetchData}>
                    <button type="submit" className="btn btn-primary">Update List</button>
                </form>
                <div>
                    {this.state.songs}
                </div>
            </div>
        )


    }
}

//
