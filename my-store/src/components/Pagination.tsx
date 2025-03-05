"use client";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pages: number;
}

function Pagination({ pages }: PaginationProps) {
  const router = useRouter();

  const handlePageClick = ({ selected }: { selected: number }) =>
    router.push("/store?page=" + (selected + 1));

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
      />
    </div>
  );
}

export default Pagination;
