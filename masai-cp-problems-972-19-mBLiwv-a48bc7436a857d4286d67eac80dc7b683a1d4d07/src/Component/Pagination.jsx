function Pagination(props) {

  const paginationValues = props.paginationValues;
  const prev = (
    <button
      data-testid="prev-page"
      // disabled={true}
      onClick = {() => props.onPageChange(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">0</button>;
  const next = (
    <button
      data-testid="next-page"
      // disabled={true}
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
