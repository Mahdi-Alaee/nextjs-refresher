"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearch = () => {
    const finalSearchParams = new URLSearchParams(searchParams.toString());
    finalSearchParams.set("search", text);
    router.push(`/store?` + finalSearchParams.toString());
  };

  return (
    <div className="flex items-center shadow p-3 gap-x-4">
      <input
        className="p-1 outline-none border"
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search for a product ..."
      />
      <button
        onClick={onSearch}
        className="py-1 px-2 bg-blue-500 text-white rounded"
      >
        search
      </button>
    </div>
  );
}

export default Search;
