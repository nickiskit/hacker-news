import React, {useEffect, useState} from 'react';
import Api from '../../api/Api';
import Comment from '../Comment';

const api = new Api();

const Comments = ({commentsId}) => {
	console.log(commentsId);

	return (
		<>
			{
				commentsId.map(comment => (
				<React.Fragment key={comment}>
					<Comment id={comment} />
				</React.Fragment>
			))
			}
		</>
	)
}


export default Comments;