import { MDXProvider } from '@mdx-js/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function DocumentationPage({ meta, children, pages }) {
  const router = useRouter()
  const pageIndex = pages.sort((a, b) => a.meta.order - b.meta.order).findIndex((page) => page.link === router.pathname)
  const previous = pages[pageIndex - 1]
  const next = pages[pageIndex + 1]

  return (
    <article>
      <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <div className="prose max-w-none pt-10 pb-8">
          <MDXProvider>{children}</MDXProvider>
        </div>
        <footer className="mt-8 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 border-t-2 border-gray-300" >
          {(next || previous) && (
            <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              <div className="text-left sm:text-right">
                {next && (
                  <Link href={next.link}>
                    <a>
                      <h2 className="text-xs tracking-wide uppercase text-gray-500">Next Article</h2>
                      <div className="text-teal-500 hover:text-teal-600">
                        {next.title}
                      </div>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          )}
        </footer>
      </div>
    </article>
  )
}