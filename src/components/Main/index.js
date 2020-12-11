import React from 'react';
import News from '../News';
import { Table, Button } from 'react-bootstrap';

const Main = ({news,  update}) => {
	return (
		<>
			<Button variant="outline-primary" onClick={() => {update()}}>Обновить</Button>
			<Table striped bordered hover>
				<tbody>
				{
					news.map(item => (
					<React.Fragment key={Object.keys(item)[0]}>
						<News news={Object.values(item)[0]} />
					</React.Fragment>
					))
				} 
				</tbody>
			</Table>
		</>
	)
}


export default Main;