import Link from 'next/link';
import type { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow">
      <div className="flex flex-wrap items-center gap-x-4 text-sm text-slate-500">
        <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900">
        <Link href={`/posts/${post.slug}`} className="transition hover:text-slate-600">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-slate-600">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
