import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"
import AuthorIcon from "./icons/author"
import DateIcon from "./icons/date"

const PostHeaderMeta = ({ title, author, date, uri }) => (
  <header className="entry-header">
    <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
    <div className="entry-meta">
      <span className="byline">
        <AuthorIcon />
        <span className="screen-reader-text">Posted by</span>
        <span className="author vcard">
          <Link className="url fn n" to={`/blog/author/${author.slug}`}>
            {author.name}
          </Link>
        </span>
      </span>{" "}
      <span className="posted-on">
        <DateIcon />
        <Link
          to={`blog/${uri}`}
          rel="bookmark"
        >
          <time
            className="entry-date published updated"
            dateTime="2019-02-04T15:34:08+00:00"
          >
            {moment(date).format(`MMMM D, YYYY`)}
          </time>
        </Link>
      </span>
    </div>
  </header>
)

export default PostHeaderMeta
