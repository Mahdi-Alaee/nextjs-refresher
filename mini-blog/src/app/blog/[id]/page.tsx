import { ArticleType } from "@/components/ArticleBox";
import Container from "@/components/Container";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
  searchParams: Record<string, string | string[]>;
}

async function ArticlePage(props: ArticlePageProps) {
  const params = await props.params;

  const id = params.id;

  const res = await fetch("http://localhost:3001/blog/" + id);

  const blog = (await res.json()) as ArticleType;

  return (
    <Container>
      <div className="mt-20">
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
    </Container>
  );
}

export default ArticlePage;
