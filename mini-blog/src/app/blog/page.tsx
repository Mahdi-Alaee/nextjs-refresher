import ArticleBox, { ArticleType } from "@/components/ArticleBox";
import Container from "@/components/Container";

async function Blog() {
  const res = await fetch("http://localhost:3001/blog");
  const blogs = (await res.json()) as ArticleType[];
  console.log(blogs);

  return (
    <Container>
      <div className="flex gap-4 mt-20 flex-wrap">
        {blogs.map((blog) => (
          <ArticleBox key={blog.id} {...blog} />
        ))}
      </div>
    </Container>
  );
}

export default Blog;
