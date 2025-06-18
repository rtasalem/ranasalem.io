// export default function Blog() {
//   return (
//     <div className="">
//       <div className="text-center">
//         
//         
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="overflow-x-auto mx-auto max-w-xl bg-base-100 text-base-content">
      <div className='text-center'>
        <h1 className="text-3xl font-bold mt-5 mb-3">blog</h1>
        <p className="mb-5">A collection of all my writing...</p>
      </div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
