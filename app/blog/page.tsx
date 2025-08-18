import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export const revalidate = 60

function PostCard(post: Post) {
  return (
    <div>
      <div className='flex items-center justify-between mt-5 mb-5'>
        <h2 className='text-m'>
          <Link href={post.url} className='border-b border-transparent hover:border-base-300 pb-0.5'>
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className='text-sm font-mono whitespace-nowrap'>
          {format(parseISO(post.date), 'd LLL yyyy')}
        </time>
      </div>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className='overflow-auto mx-auto max-w-lg text-center space-y-5'>
      <div>
        <h1 className='text-3xl font-mono mt-5'>Blog</h1>
      </div>
      <div>
        <p>A collection of all my writing...</p>
      </div>
      <div className='divide-y divide-base-300'>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
