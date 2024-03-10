import ReactPaginate from "react-paginate";

import { PageChangeType } from "types";
import { useMovieContext } from "context/MovieContext";

const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = useMovieContext();

  const handlePageChange = ({ selected }: PageChangeType) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(selected);
  };

  return (
    <ReactPaginate
      forcePage={currentPage}
      pageCount={totalPages}
      onPageChange={handlePageChange}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      containerClassName="paginate-container"
      pageClassName="paginate-page"
      previousClassName="paginate-previous"
      nextClassName="paginate-next"
      activeClassName="paginate-active"
      breakClassName="paginate-break"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
