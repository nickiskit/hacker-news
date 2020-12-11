import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Comments from '../Comments';
import {useHistory} from 'react-router-dom';

const NewsPage = ({news, update}) => {
	const imgName = randomInteger(1, 6);

	const history = useHistory();
	
	return (
		<Jumbotron>
		<Button variant="outline-primary" onClick={history.goBack}>Назад</Button>
		<Button variant="outline-primary" onClick={() => {update()}}>Обновить</Button>
		{news &&	<div style={{width: '536px'}}>
			<h2>{news.title}</h2>
			<p>{new Date(news.time * 1000).toLocaleDateString("ru-Ru") + ' ' + new Date(news.time * 1000).toLocaleTimeString("ru-Ru")}</p>
			<img src={`../img/${imgName}.jpg`} style={{maxWidth: '536px'}} /> <br/>
			<div className="newsInfo">
				<p  className="author">By {news.by}</p>
				<i className='far fa-comments news-icon'></i>
				<p className="counter">{news.descendants}</p>
			</div>
			{news.text && <span  style={{fontSize: '20px'}}>{news.text}</span>}
			{ news.url && <p style={{margin: '10px 0 30px'}}>
    			<Button variant="primary" href={news.url}>Узнать больше</Button>
 			</p> }
 			<h5>Комментарии</h5>
 			<hr align="left" size="4"/>
 			{news.kids && <Comments commentsId={news.kids} />}
 			</div>}
		</Jumbotron>
	)
}

function randomInteger (min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default NewsPage;

