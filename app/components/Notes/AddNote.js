import React from 'react';

class AddNote extends React.Component{
    handleSubmit(){
      var newNote = this.note.value;
      this.note.value = "";
      this.props.addNote(newNote);

    }

    setRef(ref){
        this.note = ref;
    }

    render(){
        return (
            <div className="input-group">
                <input type="text" ref={(ref) => this.setRef(ref)} 
                placeholder="Add new note" className="form-control" />

                <span className="input-group-btn">
                    <button type="button" className="btn btn-default"
                    onClick={() => this.handleSubmit()}>Submit
                    </button>
                </span>
            </div>
        )

    }

};

AddNote.propTypes =  {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}

export default AddNote;

// var AddNote  = React.createClass({
//   propTypes: {
//     username: React.PropTypes.string.isRequired,
//     addNote: React.PropTypes.func.isRequired
//   },

//   setRef: function(ref){
//     this.note = ref;
//   },

//   handleSubmit: function(){
//       var newNote = this.note.value;
//       this.note.value = "";
//       this.props.addNote(newNote);
//   },

//   render: function () {
//     return (
//         <div className="input-group">
//             <input type="text" ref={this.setRef} 
//             placeholder="Add new note" className="form-control" />

//             <span className="input-group-btn">
//                 <button type="button" className="btn btn-default"
//                  onClick={this.handleSubmit}>Submit
//                 </button>
//             </span>
//         </div>
//     )
//   }
// });

// module.exports = AddNote;
