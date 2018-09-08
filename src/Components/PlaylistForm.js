import React, { Component } from 'react';


export default class PlaylistForm extends Component {
    constructor(props){
        super(props);
        //here, we bind all of our methods on to the constructor. If we use ES6 arrow functions,
            //methods are bound automatically, and we don't need to bind onto the constructor manually 
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.addToList = this.addToList.bind(this);

        //here we are setting our local state. All the input values are empty on page load!
        this.state = {
            userName:'',
            songTitle: '',
            songArtist: '',
            songNotes: ''

        }
    }

    //we're doing some event handling here. The next 4 functions allow us to manipulate the input fields in our form. We set the "value" data that the user inputs onto our local state, replacing the empty strings set above.
    handleUserNameChange(event){
        this.setState({
            userName: event.target.value
        });
    }
    //ES6 arrow function syntax would automatically bind method. See example below
    //  handleTitleChange = (event) => {
    //         this.setState({
    //             songTitle: event.target.value
    //         });
    //  }
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


    //below we are rendering a form that will retain all the values we input, and update state accordingly, using the "values" property on each input
    render (){
        return (
            <div>
                  <form className="form w20" onSubmit={this.addToList}>
                    <div className="form-group row">
                      <label htmlFor="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">User: </label>
                      <div className="col-sm-10">
                        <input type="text"  onChange={this.handleUserNameChange} className="form-control form-control-lg" id="smFormGroupInput" value={this.state.userName} placeholder="ex. your name"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Artist: </label>
                      <div className="col-sm-10">
                        <input type="text"  onChange={this.handleArtistChange} className="form-control form-control-lg" id="smFormGroupInput" value={this.state.songArtist} placeholder="ex. artist"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Song: </label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.handleTitleChange} className="form-control form-control-lg" id="smFormGroupInput" value={this.state.songTitle} placeholder="ex. song title"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Notes About Song: </label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.handleNoteChange} className="form-control form-control-lg" id="smFormGroupInput" value={this.state.songNotes} placeholder="ex. this song is dope!"/>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
        )
    }
}
