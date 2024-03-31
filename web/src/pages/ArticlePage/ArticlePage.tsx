import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
