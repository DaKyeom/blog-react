import React, { Component } from 'react';
import './EditorPane.scss';

class EditorPane extends Component {
    render(){
        return (
          <div className="editor-pane">
              <input className='title' placeholder='제목입력' name='title' />
              <div className='code-editor'></div>
          </div>
        )
    }
}

export default EditorPane;
