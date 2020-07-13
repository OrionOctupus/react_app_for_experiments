import React from 'react';
import Post from './Post';

// (props);  let posts = props.posts; 
export default ({ posts }) => {
    if (!posts.length) {
        return <p className="text-center"> Постов нет</p>
    }
    return (
        posts.map((item) => {
            return <Post post={item} key={item} />
        })
    )
}