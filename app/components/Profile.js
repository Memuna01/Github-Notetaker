import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile'  ;
import Notes from './Notes/Notes';
import getGithubInfo from  '../utils/helpers';
import Rebase from 're-base';

// var ReactFireMixin = require('reactfire');
// var Firebase = require('firebase');
// var helpers = require('../utils/helpers');
// var Router = require('react-router');

const base = Rebase.createClass({
  apiKey: "",
  authDomain: "",
  databaseURL: 'https://github-note-taker.firebaseio.com/',
  storageBucket: ""
});

class Profile extends React.Component{

  constructor(props){
    super(props); 
    this.state = {
        notes: [],
        bio: {},
        repos: []
    }
  }

  componentDidMount(){
      console.log(this);
      // this.ref = new Firebase('https://github-note-taker.firebaseio.com/');        
      this.init(this.props.params.username);
  }

  componentWillReceiveProps(nextProps){
    // console.log("Next props", nextProps);
    // this.unbind('notes');
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentWillUnMount(){
  //  this.unbind('notes');
    base.removeBinding(this.ref);
  }

  init(username){

    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    });

    //  var childRef = this.ref.child(username);
    //   this.bindAsArray(childRef, 'notes');

      getGithubInfo(username )
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this));
  }

  handleAddNote(newNote){
    //update firebase with the newNote
    // this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);

    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }

  render(){
   return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    )

  }

}

export default Profile;

