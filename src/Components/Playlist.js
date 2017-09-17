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

    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
          return results.json();
        })
        .then(data => {
            let variable = data.map((aSong, index) =>{
                return (<PlaylistItem key={index + 1} aSong={aSong}/>)
            })
          this.setState({songs: variable});
        })
    };

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
            console.log("props: ", this.props.songs);
            console.log("variable: ", variable);
        });
    }

    render(){
        return(
            <div id="all-results">
                <form className="form w60" onSubmit={this.fetchData}>
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
