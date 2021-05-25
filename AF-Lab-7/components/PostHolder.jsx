import Posts from "./Posts"
import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddPost from "./AddPost";
import {Switch} from "react-router-dom";

export default class PostHolder extends React.Component{

    constructor(props) {
        super(props);
    }

    //Render the below posts in the App.jsx.
    render() {
        return <Switch>

            <Route exact path="/">
                <Posts posts = {posts}/>
            </Route>

            <Route exact path="/add">
                <AddPost save={this.addNewPost}/>
            </Route>


        </Switch>

    }

     addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
    }


}

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];


