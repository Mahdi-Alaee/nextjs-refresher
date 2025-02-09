import Link from "next/link";

export interface ArticleType {
    id?: string;
    title?: string;
    description?: string;
}

function ArticleBox({title,description,id}: ArticleType) {
  return (
    <Link href={`/blog/${id}`} className="shadow-md p-4 max-w-[33%]">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </Link>
  );
}

export default ArticleBox;
