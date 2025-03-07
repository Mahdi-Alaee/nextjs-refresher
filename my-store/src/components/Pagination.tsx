"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pages: number;
}

function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = ({ selected }: { selected: number }) => {
    const finalSearchParams = new URLSearchParams(searchParams.toString());
    finalSearchParams.set("page", (selected + 1).toString());

    router.push("/store?" + finalSearchParams.toString());
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </div>
  );
}

export default Pagination;
