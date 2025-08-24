import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const revalidate = 60

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`)
  }

  return { title: post.title }
}

export default async function PostLayout({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`)
  }

  return (
    <article className='mx-auto max-w-3xl py-8 text-left sm:text-justify'>
      <div className='mb-5 text-center'>
        <time dateTime={post.date} className='text-xs font-mono'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl mt-2'>{post.title}</h1>
      </div>
      <div 
        className='[&_a]:border-b [&_a]:border-transparent [&_a:hover]:border-base-300 [&_a]:pb-0.5 [&>*]:mb-3 [&>*:last-child]:mb-0' 
        dangerouslySetInnerHTML={{ __html: post.body.html }} 
        />
    </article>
  )
}
