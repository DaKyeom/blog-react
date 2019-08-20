import React, { Component } from 'react';
import './EditorPane.scss';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class EditorPane extends Component {
    editor = null;
    CodeMirror =null;
    
    initalizeEditor = () => {
        this.CodeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        });
    }

    componentDidMount() {
        this.initalizeEditor();
    }

    render(){
        return (
          <div className="editor-pane">
              <input className='title' placeholder='제목입력' name='title' />
              <div className='code-editor' ref={ref => this.editor=ref}></div>
          </div>
        );
    }
}

export default EditorPane;
