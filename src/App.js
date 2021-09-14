import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);
	const URL = 'https://jsonplaceholder.typicode.com/posts';

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(URL);
			setPosts(res.data);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	console.log(posts);
	return (
		<div className='App'>
			<h1>Hello World!</h1>
		</div>
	);
}

export default App;
