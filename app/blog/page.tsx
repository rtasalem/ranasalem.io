import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-5 mt-10">
          <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="text-l text-gray-500 whitespace-nowrap ml-4">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="overflow-x-auto mx-auto max-w-xl text-base-content bg-base-100">
      <div className='text-center'>
        <h1 className="text-3xl font-bold mt-5 mb-3">Blog</h1>
        <p className="mb-5">A collection of all my writing...</p>
      </div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
