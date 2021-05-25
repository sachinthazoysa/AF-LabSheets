import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostsHolder from './components/PostHolder';
import AddPost from "./components/AddPost";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Router>
            <Switch>
                <Route path="/">
                    <PostsHolder/>
                </Route>
            </Switch>


        </Router>
    }
}

