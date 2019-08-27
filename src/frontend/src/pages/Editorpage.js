import React, { Component } from 'react';

import { EditorTemplate } from './../components/editor';

import EditorPaneContainer from './../components/editor/EditorPaneContainer';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPreviewContainer from './../containers/editor/EditorPreviewContainer';

class Editorpage extends Component {
    render(){
        return(
            <div>
                <EditorTemplate
                    header={ <EditorHeaderContainer /> }
                    editor={<EditorPaneContainer />}
                    preview={<EditorPreviewContainer />}
                 />
            </div>
        )
    }
}

export default Editorpage;