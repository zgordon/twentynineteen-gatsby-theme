import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"
import AuthorIcon from "./icons/author"
import DateIcon from "./icons/date"
import CategoryIcon from "./icons/category"
import TagIcon from "./icons/tag"

const PostFooterMeta = ({ author, date, categories, tags, uri }) => (
  <footer className="entry-footer">
    <span className="byline">
      <AuthorIcon />
      <span className="screen-reader-text">Posted by</span>
      <span className="author vcard">
        <Link className="url fn n" to={`/blog/author/${author.slug}`}>
          {author.name}
        </Link>
      </span>
    </span>
    <span className="posted-on">
      <DateIcon />
      <Link
        to={`blog/${uri}`}
        rel="bookmark"
      >
        <time
          className="entry-date published updated"
          dateTime="2019-02-25T17:37:06+00:00"
        >
          {moment(date).format(`MMMM D, YYYY`)}
        </time>
      </Link>
    </span>
    <span className="cat-links">
      <CategoryIcon />
      <span className="screen-reader-text">Posted in</span>
      {categories.nodes
        .map(category => (
          <Link
            key={category.name}
            to={`/blog/category/${category.slug}`}
            rel="category"
          >
            {category.name}
          </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ", ", elem]
        }, null)}
    </span>
    <span className="tags-links">
      <TagIcon />
      <span className="screen-reader-text">Tags: </span>
      {tags.nodes
        .map(tag => (
          <Link key={tag.name} to={`/blog/tag/${tag.slug}`} rel="tag">
            {tag.name}
          </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ", ", elem]
        }, null)}
    </span>
  </footer>
)

export default PostFooterMeta
