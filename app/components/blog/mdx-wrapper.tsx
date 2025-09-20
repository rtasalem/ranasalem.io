'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import React from 'react'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-bold text-2xl mt-9 mb-3" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl mt-7 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg mt-5 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} />
  ),
  ul: (props: React.HtmlHTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 my-4 space-y-2 marker:text-base-content [&>li]:mt-2"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 marker:text-base-content [&>li]:mt-2"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-base-300 pl-4 italic my-6 text-base-content"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="px-1 py-0.5 text-base-content bg-base-200 text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="p-4 rounded text-base-content bg-base-200 overflow-x-auto my-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-info border-b border-transparent hover:border-base-300 pb-0.5"
      {...props}
    />
  )
}


export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
