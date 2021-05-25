import React from 'react';
import PostListItem from './PostListItem';
import {Link} from "react-router-dom";
import Post from "./Post";



export default class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post:null
        };
    }


    selectPost(post) {
        this.setState({post: post})
    }


    render() {
        const {posts} = this.props;
        return <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post1 => {
                    return <PostListItem
                     key={post1.id.toString()}  selectPost={post => this.selectPost(post)} post={post1}/>
                })}
                </tbody>
            </table>
            <div>
                {this.state.post ? <Post post={this.state.post}
                                         editable={false}/> : ''}
            </div>
            <Link to="/add">Add</Link>
        </div>;
    }



}

