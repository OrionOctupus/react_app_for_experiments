import React from 'react';

export default function Post({ post }) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post}</h5>
                <p className="card-text">Text example!</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}