import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EditorPreview } from 'components/editor';

class EditorPreviewContainer extends Component {
    render(){
        const { markdown, title } = this.props;

        return(
            <EditorPreview title={title} markdown={markdown} />
        );
    }
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown')
    })
)(EditorPreviewContainer);