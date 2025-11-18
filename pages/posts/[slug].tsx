import type { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Layout } from '@/components/Layout';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!post) {
    return null;
  }

  return (
    <Layout title={post.title} description={post.description}>
      <article className="prose prose-slate max-w-none">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{post.tags.join(' • ')}</p>
        <h1>{post.title}</h1>
        <p className="text-base text-slate-500">
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time> · {post.readingTime}
        </p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold text-indigo-600">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </Layout>
  );
}
