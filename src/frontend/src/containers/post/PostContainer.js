import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postActions from 'store/modules/post';

import { Post } from 'components/post';

class PostConatiner extends Component {
    initialize = async () => {
        const { PostActions, id } = this.props;

        try{
            await PostActions.readPost(id);
        } catch(err) {
            console.log('erroe:', err)
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render(){
        const { post, loading } = this.props;

        if(loading) return null;

        const { title, body, createdDate } = post.toJS();

        return(
            <div>
                <Post
                  title={title} 
                  body={body} 
                  createdDate={createdDate}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        post: state.post.get('post'),
        loading: state.pender.pending['post/READ_POST']
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(PostConatiner);