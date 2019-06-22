import React, { Component } from 'react';
import { PageTemplate } from 'components/common';
import { PostList, Pagination } from 'components/post';

class Homepage extends Component {
    render(){
        return(
            <PageTemplate>
                <PostList/>
                <Pagination />
            </PageTemplate>
        )
    }
}

export default Homepage;