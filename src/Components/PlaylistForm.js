import React, { Component } from 'react';


export default class PlaylistForm extends Component {
    constructor(props){
        super(props);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.addToList = this.addToList.bind(this);


        this.state = {
            userName:'',
            songTitle: '',
            songArtist: '',
            songNotes: ''

        }
    }


    handleUserNameChange(event){
        this.setState({
            userName: event.target.value
        });
    }

    handleTitleChange(event){
        this.setState({
            songTitle: event.target.value
        });
    }
    handleArtistChange(event){
        this.setState({
            songArtist: event.target.value
        });
    }
    handleNoteChange(event){
        this.setState({
            songNotes: event.target.value
        });
    }

    addToList = (event) => {
        event.preventDefault();
        this.setState({
            userName: event.target.value,
            songTitle: event.target.value,
            songArtist: event.target.value,
            songNotes: event.target.value});
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }



    render (){
        return (
            <div>
                  <form className="form w-20" onSubmit={this.addToList}>
                    <div className="form-group row">
                      <label htmlFor="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">User Name: </label>
                      <div className="col-sm-10">
                        <input type="text"  onChange={this.handleUserNameChange} className="form-control form-control-lg" id="smFormGroupInput" placeholder="Jason"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Artist/Band: </label>
                      <div className="col-sm-10">
                        <input type="text"  onChange={this.handleArtistChange} className="form-control form-control-lg" id="smFormGroupInput" placeholder="Alicia Keys"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Song/Title: </label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.handleTitleChange} className="form-control form-control-lg" id="smFormGroupInput" placeholder="Fallin'"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Notes About Song: </label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.handleNoteChange} className="form-control form-control-lg" id="smFormGroupInput" placeholder="How I feel about you!"/>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
        )
    }
}
