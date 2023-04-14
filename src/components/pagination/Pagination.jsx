import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='pagination-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;