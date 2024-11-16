import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    
    const postsItem = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })
  return (
    <main>
      {postsItem}
    </main>
  )
}

export default ArticleList
