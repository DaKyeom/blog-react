import React, { Component } from 'react';

import { EditorTemplate } from './../components/editor';

import EditorPaneContainer from './../components/editor/EditorPaneContainer';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPreviewContainer from './../containers/editor/EditorPreviewContainer';

class Editorpage extends Component {
    render(){
        return(
            <div>
                <EditorTemplate
                    header={ <EditorHeader /> }
                    editor={<EditorPaneContainer />}
                    preview={<EditorPreviewContainer />}
                 />
            </div>
        )
    }
}

export default Editorpage;