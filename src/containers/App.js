import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


import {setSearchField} from '../actions';

//what states to listen to
const mapStateToProps = state =>{
	return {
		searchField : state.searchField
	}
}

//what actions to listen to to dispatch
const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))	
	}

}


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json()
		}).then(users =>{this.setState({robots:users})});
		
	}
	render(){
		const {robots} = this.state;// do destructuring
		const {searchField, onSearchChange} = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());

		})
		return !robots.length ?
			<h1> Loading </h1>:
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>		
			</div>
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);