import "./index.css";
const Pagination = ({ total, currentPage, setCurrentPage }) => {
  function generateNoOfPages(total) {
    const pages = [];

    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }

    return pages;
  }
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="pagination-btn"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generateNoOfPages(total).map((pageNo) => (
        <button
          className={`pagination-btn ${currentPage === pageNo ? "active" : ""}`}
          key={pageNo}
          onClick={() => setCurrentPage(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="pagination-btn"
        disabled={currentPage === total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
