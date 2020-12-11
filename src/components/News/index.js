import React from 'react';
import { Link } from 'react-router-dom';

const News = ({news}) => {
	return (
		<tr>
			<td>
				<Link to={`/news/${news.id}`} style={{ textDecoration: 'none',  color: 'inherit' }}>
					<h5> {news.title} </h5>
					Author: {news.by} <br/>
					Score: {news.score} <br/>
					Date: {new Date(news.time * 1000).toLocaleDateString("ru-Ru") + ' ' + new Date(news.time * 1000).toLocaleTimeString("ru-Ru")}<br />
				</Link>
			</td>
		</tr>

	)
}


export default News;