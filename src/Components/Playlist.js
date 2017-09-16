import React, { Component } from 'react';
import PlaylistItem from './PlaylistItem.js';

export default class Playlist extends Component {
    constructor(props){
        super(props);
        this.state ={
            songs:[]
        }
    }




    componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
            return results.json();
        })
        .then(data => {
            let variable = data.map((aSong, index) =>{
                return (<PlaylistItem key={index + 1} aSong={aSong}/>)
            })
            this.setState({songs: variable});
            console.log("state: ", this.state.songs);
        })
    }

    // componentDidMount(){
    // let she = "awesome";
    // fetch('https://swapi.co/api/vehicles/').then(results => {
    //   return results.json();
    // }).then(data => {
    //     let bananas = data.results.map((whip, index) => {
    //         return (<Card key={index + 1} className="blah" whip={whip} imani={she}/>)
    //     })
    //     this.setState({vehicles: bananas})
    // })


    render(){
        return(
            <div>
                <p>The Playlist</p>
                <PlaylistItem aSong={this.state.songs}/>

            </div>
        )
        // console.log("aSong: ", aSong);

    }
}
