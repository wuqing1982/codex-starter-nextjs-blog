import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import type { Post } from '@/types/post';

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function HomePage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Codex Starter Blog" description="A polished Next.js starter for sharing thoughtful posts.">
      <Head>
        <meta property="og:title" content="Codex Starter Blog" />
        <meta property="og:description" content="A polished Next.js starter for sharing thoughtful posts." />
      </Head>
      <section className="space-y-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Starter</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">Share product notes, launch updates, and founder lessons.</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            This starter ships with TypeScript, Tailwind CSS, and markdown-ready blog posts so you can hit publish faster.
          </p>
        </div>
        <div className="space-y-6">
          {posts.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
