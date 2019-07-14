import React, { Component } from 'react';

import {EditorTemplate, EditorHeader, EditorPreview} from './../components/editor';
import EditorPane from './../components/editor/EditorPane';

class Editorpage extends Component {
    render(){
        return(
            <div>
                <EditorTemplate
                    header={ <EditorHeader /> }
                    editor={<EditorPane />}
                    preview={<EditorPreview />}
                 />
            </div>
        )
    }
}

export default Editorpage;