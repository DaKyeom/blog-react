import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EditorHeader } from 'components/editor';
import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {
    componentDidMount() {
        const { EditorActions } = this.props;
        EditorActions.initialize();
    }

    handleBack = () => {
        const { history } = this.props;
        history.Back();
    }

    handleSubmit = async()  => {
        const { title, markdown, EditorActions, history } = this.props;
        const post = { title, body:markdown };

        try {
            await EditorActions.writePost(post);
            history.push(`/post/${this.props.postId}`);
        } catch(err) {
            console.log('error:', err);
        }
    }

    render(){
        const { handleBack, handleSubmit } = this;

        return (
            <EditorHeader
              onBack={handleBack}
              onSubmit={handleSubmit}
             />
        )
    }
}

export default connect (
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        postId: state.editor.get('postId')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));