export interface ArticleType {
    id?: number;
    title?: string;
    description?: string;
}

function ArticleBox({title,description}: ArticleType) {
  return (
    <div className="shadow-md p-4 max-w-[33%]">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
}

export default ArticleBox;
