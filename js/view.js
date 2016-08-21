import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import HOME from "../components/HOME/Layout/HOMELayout";
import SingleLayout from "../components/Single/Layout/SingleLayout";
const content = document.getElementById('content');

ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={HOME}></Route>
			<Route path="single/:id" name="single" component={SingleLayout}></Route>
	</Router>
    ,content);
