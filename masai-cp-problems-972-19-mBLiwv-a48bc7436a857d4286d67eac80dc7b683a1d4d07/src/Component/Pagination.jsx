function Pagination(props) {

  const paginationValues = props.paginationValues;
  let maxPage = paginationValues.totalPages/paginationValues.limit
  const prev = (
    <button
      data-testid="prev-page"
      disabled={paginationValues.page > 1 ? false : true}
      onClick = {() => props.onPageChange(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{paginationValues.page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={paginationValues.page < maxPage ? false : true}
      onClick = {() => props.onPageChange(1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{paginationValues.totalPages}</b>
      </div>
    </div>
  );
}

export default Pagination;
