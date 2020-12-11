import React, {useEffect, useState} from 'react';
import Api from '../../api/Api';
import Comments from '../Comments';

const api = new Api();

const Comment = ({id}) => {
	
	const [comment, setComment] = useState([]);
	const [loadComments, setLoad] = useState(false);

	useEffect(() => {
		api.getItem(id)
			.then(data => setComment(data));
	}, [])

	return (
		<div className="comment-cickable-block" onClick={() => {comment.kids && setLoad(true)}}>
			<h6>{comment.by}</h6>
			<div className="comment">
				<p>{comment.text}</p>
				<p className="date">{new Date(comment.time * 1000).toLocaleDateString("ru-Ru") + ' ' + new Date(comment.time * 1000).toLocaleTimeString("ru-Ru")}</p>	
			</div>
			{loadComments && <div className="sub-comments"> <Comments commentsId={comment.kids}/></div>}
		</div>
	) 
}




export default Comment;