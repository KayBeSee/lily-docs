
import { pages } from '@/getAllPages'

export async function getStaticProps() {
  return {
    props: {
      pages: pages.map((page) => ({
        title: page.module.meta.title,
        meta: page.module.meta,
        link: page.link,
      })),
    },
  }
}