// Pagination.js
const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div style={{ marginTop: '20px' }}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        backgroundColor: currentPage === page ? '#007bff' : '#f0f0f0',
                        color: currentPage === page ? 'white' : 'black',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
