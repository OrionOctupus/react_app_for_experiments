import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

// (props);  let posts = props.posts; 
const Posts = ({ syncPostFromMstp }) => {
    if (!syncPostFromMstp.length) {
        return <p className="text-center"> Постов нет</p>
    }
    return (
        syncPostFromMstp.map((item) => {
            return <Post post={item} key={item.id} />
        })
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPostFromMstp: state.posts.posts
    }
};

export default connect(mapStateToProps, null)(Posts);

//connect - функция высшего порядка