export default class Api {

	mainUrl = 'https://hacker-news.firebaseio.com/v0/';

	request = async url => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Error: ${res.status}`);
		}

		return await res.json();
	};


	getItem = async id => {
		return await this.request(this.mainUrl + `item/${id}.json`);
	};

	getNewItems = async () => {
		return await this.request(this.mainUrl + 'newstories.json');	
	}
}