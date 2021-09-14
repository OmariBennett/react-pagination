import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i);
	}

	const handelPagination = (number, e) => {
		e.preventDefault();
		paginate(number);
	};

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li className='page-item' key={number}>
						<a
							href='!#'
							className='page-link'
							onClick={(e) => handelPagination(number, e)}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
