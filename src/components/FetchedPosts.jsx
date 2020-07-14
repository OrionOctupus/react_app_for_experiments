import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/actions';
import './FetchedPostsStyle.css';
import Loader from './Loader';

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => {
        return state.posts.fetchedPosts;
    })

    const loading = useSelector(state => state.app.loading);

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPost())}
        > Загрузить</button>

    }

    return (
        posts.map((item) => {
            return <Post post={item} key={item.id} />
        })
    )
}