import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }
  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    if(notes) {
      return(
        <div className={classes.sidebarContainer}>
          <Button 
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}
          >{this.state.addingNote ? 'Cancel' : 'New Note'} 
          </Button>
          {
            this.state.addingNote ? 
            <div>
              <input type='text'
                className={classes.newNoteInput}
                placeholder='Enter note title'
                onKeyUp={(e) => this.updateTitle(e.target.value)}
                ></input>
              <Button 
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >Submit Note </Button>
            </div> : null
          }
          <List>{
            notes.map((_note, _index) => {
              return(
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  <Divider />
                </div>
              )
            })
          }
          </List>
        </div>
      )
    } else {
      return(<div></div>);
    }
  }

  newNoteBtnClick =() => {
    console.log('New Note');
    this.setState({ title: null, addingNote: !this.state.addingNote });
  }
  updateTitle = (txt) => {
    this.setState({ title: txt });
  }
  newNote = () => {
    console.log(this.state);
  }
  selectNote =() => { console.log('Select Note') }
  deleteNote =() => { console.log('Delete ya Note') }

}
export default withStyles(styles)(SidebarComponent)