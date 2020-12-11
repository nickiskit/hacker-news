import React from 'react';
import Main from './components/Main';
import NewsPage from './components/NewsPage';
import {BrowserRouter, Route} from 'react-router-dom'; 
import Api from './api/Api';
import { Spinner } from 'react-bootstrap';

import './style.css'

class App extends React.Component {
	api = new Api();
	interval;

	state = {
		news: null,
		comments: null,
		newsById: null
	}

	_isMounted = false;

	componentDidMount() {
		this._isMounted = true;
		if (this._isMounted) {
			this.getNews();
			this.interval = setInterval(() => {
				this.getNews();
			}, 60000);
		}
  	}

  	componentWillUnmount() {
    	clearInterval(this.interval);
    	this._isMounted = false;
  	}

	getNews = () => {
		this.api.getNewItems()
			.then(newsId => {
			 return newsId.slice(0, 100).map(item => this.api.getItem(item))
		})
			.then(news => Promise.all(news).then(news => {
				this.setState({news: news.map(item => {
					if(item) {
						let news = {};
						news[item.id] = item;
						return news;
					}
				}).filter(item => item)
			});

				this.setState({comments: news.map(item => {
					if(item && item.kids) {
						let comments = {};
						comments[item.id] = item.kids
						return comments;}
				}).filter(item => item)})
			}
		))
	}

	getNewsById = id => {
		let newsById;

		this.state.news.forEach(news => {
			if (Object.keys(news)[0] == id) {
				newsById =  Object.values(news)[0];
			}
		})

		return newsById;
	}

	render() {
		if(!this.state.news) return  (
			<div className="splash">
				<span>LOADING...</span><br/>
				<Spinner animation="border" role="status">
		  			<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		)
		
		return (
			<BrowserRouter>
				<Route exact path='/' render = {() => 
					    	this.state.news && <Main news={this.state.news} update={this.getNews} />} />
				<Route exact path='/news/:id' render = {(props) => {
					let newsById = this.getNewsById(props.match.params.id);
					return (
						<NewsPage news={newsById} update={this.getNews}/>
					)
				}
			 } />
			</BrowserRouter>									
 		 );		
	}
}

export default App;
