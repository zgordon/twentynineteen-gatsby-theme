import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import axios from "axios"
import moment from "moment"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostHeaderMeta from "../../components/post-header-meta"
import PostFooterMeta from "../../components/post-footer-meta"

const SITEURL_QUERY = graphql`
  query CommentsSectionsQuery {
    site {
      _xexperimentalThemes {
        options {
          wordPressUrl
        }
      }
    }
  }
`;

const SinglePost = props => {

  const data = useStaticQuery(SITEURL_QUERY);
  const { wordPressUrl } = data.site._xexperimentalThemes[0].options;

  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [pingbacks, setPingbacks] = useState([]);

  const fetchComments = async (id) => {
    const COMMENT_QUERY = `
      {
        post(id: "${id}") {
          title
          comments {
            nodes {
              id
              commentId
              content
              type
              date
              children {
                nodes {
                  id
                  commentId
                  content
                  date
                  type
                  children {
                    nodes {
                      id
                      commentId
                      content
                      date
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    const response = await axios.post(`${wordPressUrl}/graphql`, { query: COMMENT_QUERY })
    setComments(response && response.data && response.data.data && response.data.data.post.comments)

    const pingbacks = comments && comments.nodes && comments.nodes.length && comments.nodes.filter(comment => comment.type === "pingback")
    setPingbacks(pingbacks)

    const replies = comments && comments.nodes && comments.nodes.length && comments.nodes.filter(comment => comment.type === null)
    setReplies(replies)
  }

  useEffect(() => {
    fetchComments(id)
  }, [comments.length]);


  const {
    pageContext: {
      id,
      postId,
      title,
      excerpt,
      content,
      uri,
      date,
      author,
      categories,
      tags,
      prev,
      next,
    },
  } = props

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <PostHeaderMeta uri={uri} title={title} date={date} author={author} />

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <PostFooterMeta
          uri={uri}
          date={date}
          author={author}
          categories={categories}
          tags={tags}
        />
      </article>
      {/* #post-${ID} */}
      <nav className="navigation post-navigation" role="navigation">
        <h2 className="screen-reader-text">Post navigation</h2>
        <div className="nav-links">
          {prev && (
            <div className="nav-previous">
              <Link to={`/blog/${prev.uri}`} rel="prev">
                <span className="meta-nav" aria-hidden="true">
                  Previous Post
                </span>
                <span className="screen-reader-text">Previous post:</span>{" "}
                <br />
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: prev.title }}
                />
              </Link>
            </div>
          )}
          {next && (
            <div className="nav-next">
              <Link to={`/blog/${next.uri}`} rel="next">
                <span className="meta-nav" aria-hidden="true">
                  Next Post
                </span>
                <span className="screen-reader-text">Next post:</span> <br />
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: next.title }}
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div id="comments" className="comments-area">
        <div className="comments-title-wrap">
          <h2 className="comments-title">
            Join the Conversation		</h2>{/* .comments-title */}

          <div className="discussion-meta">
            <ol className="discussion-avatar-list">
              <li><div className="comment-user-avatar comment-author vcard">
                <img alt="" src="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=60&amp;d=mm&amp;r=g" srcSet="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" /></div>
              </li>
              <li><div className="comment-user-avatar comment-author vcard"><img alt="" src="http://2.gravatar.com/avatar/?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo avatar-default" height="60" width="60" /></div></li>
              <li><div className="comment-user-avatar comment-author vcard"><img alt="" src="http://0.gravatar.com/avatar/?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo avatar-default" height="60" width="60" /></div></li>
            </ol>{/* .discussion-avatar-list */}
            <p className="discussion-meta-info">
              <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>		<span>3 Comments</span>
            </p>
          </div>{/* .discussion-meta */}
        </div>{/* .comments-title-flex */}
        <ol className="comment-list">

          <>
            {
              replies && replies.length && replies.map(reply => (
                <li id={`comment-${reply.commentId}`} key={reply.id} className="comment even thread-even depth-1 parent">
                  <article id="div-comment-78" className="comment-body">
                    <footer className="comment-meta">
                      <div className="comment-author vcard">

                        <img alt="" src="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=60&amp;d=mm&amp;r=g"
                          srcSet="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" />
                        <b className="fn">{`Comment Author`}</b>
                        <span className="screen-reader-text says">says:</span>
                      </div>{/* .comment-author */}

                      <div className="comment-metadata">
                        <a href="http://localhost/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/#comment-78">
                          <time dateTime={reply.date} title="October 2, 2017 at 9:59 pm">
                            {`${moment(reply.date).format("MMMM D, YYYY")} at ${moment(reply.date).format("h:mm a")}`}
                          </time>
                        </a>
                      </div>{/* .comment-metadata */}

                    </footer>{/* .comment-meta */}

                    <div className="comment-content">
                      <p dangerouslySetInnerHTML={{ __html: reply.content }} />
                    </div>{/* .comment-content */}

                  </article>{/* .comment-body */}
                  <div className="comment-reply"><a rel="nofollow" className="comment-reply-link" href="/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/?replytocom=78#respond" data-commentid="78" data-postid="567" data-belowelement="div-comment-78" data-respondelement="respond" aria-label="Reply to Humaiz Azad">Reply</a></div>		<ol className="children">
                    <li id="comment-79" className="comment byuser comment-author-muhammad-muhsin bypostauthor odd alt depth-2">
                      <article id="div-comment-79" className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <a href="http://mtwoblog.com" rel="external nofollow" className="url"><img alt="" src="http://2.gravatar.com/avatar/?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo avatar-default" height="60" width="60" /><span className="post-author-badge" aria-hidden="true"><svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><span className="post-author-badge" aria-hidden="true"><svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><b className="fn"></b></a><b className="fn"><a href="http://mtwoblog.com" rel="external nofollow" className="url">Muhammad Muhsin</a></b> <span className="screen-reader-text says">says:</span>					</div>{/* .comment-author */}

                          <div className="comment-metadata">
                            <a href="http://localhost/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/#comment-79">
                              <time dateTime="2017-10-02T22:10:39+00:00" title="October 2, 2017 at 10:10 pm">
                                October 2, 2017 at 10:10 pm							</time>
                            </a>
                          </div>{/* .comment-metadata */}

                        </footer>{/* .comment-meta */}

                        <div className="comment-content">
                          <p>Sure, let’s have a meetup about it one day. Check out Chathu’s slides here: <a href="https://speakerdeck.com/iamchathu/hardening-wordpress-is-an-art" rel="nofollow">https://speakerdeck.com/iamchathu/hardening-wordpress-is-an-art</a></p>
                        </div>{/* .comment-content */}

                      </article>{/* .comment-body */}

                      <div className="comment-reply"><a rel="nofollow" className="comment-reply-link" href="/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/?replytocom=79#respond" data-commentid="79" data-postid="567" data-belowelement="div-comment-79" data-respondelement="respond" aria-label="Reply to Muhammad Muhsin">Reply</a></div>		</li>{/* #comment-## */}
                  </ol>{/* .children */}
                </li>

              ))
            }
          </>

          {/* <li id="comment-78" className="comment even thread-even depth-1 parent">
            <article id="div-comment-78" className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <img alt="" src="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=60&amp;d=mm&amp;r=g"
                    srcSet="http://0.gravatar.com/avatar/0b425d6984e2b0b575635f5101913416?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" /><b className="fn">Humaiz Azad</b> <span className="screen-reader-text says">says:</span>					
                </div>{
                      

                <div className="comment-metadata">
                  <a href="http://localhost/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/#comment-78">
                    <time dateTime="2017-10-02T21:59:48+00:00" title="October 2, 2017 at 9:59 pm">
                      October 2, 2017 at 9:59 pm							</time>
                  </a>
                </div>

              </footer>

              <div className="comment-content">
                <p>Interesting read. Specially about the hardening WordPress. Should regard website security seriously nowadays alot of sites are getting attacked even in Sri Lanka. Maybe we can have a little session on website hardenin oneday</p>
              </div>

            </article>

            <div className="comment-reply"><a rel="nofollow" className="comment-reply-link" href="/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/?replytocom=78#respond" data-commentid="78" data-postid="567" data-belowelement="div-comment-78" data-respondelement="respond" aria-label="Reply to Humaiz Azad">Reply</a></div>		<ol className="children">
              <li id="comment-79" className="comment byuser comment-author-muhammad-muhsin bypostauthor odd alt depth-2">
                <article id="div-comment-79" className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <a href="http://mtwoblog.com" rel="external nofollow" className="url"><img alt="" src="http://2.gravatar.com/avatar/?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo avatar-default" height="60" width="60" /><span className="post-author-badge" aria-hidden="true"><svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><span className="post-author-badge" aria-hidden="true"><svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><b className="fn"></b></a><b className="fn"><a href="http://mtwoblog.com" rel="external nofollow" className="url">Muhammad Muhsin</a></b> <span className="screen-reader-text says">says:</span>					
                    </div>

                    <div className="comment-metadata">
                      <a href="http://localhost/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/#comment-79">
                        <time dateTime="2017-10-02T22:10:39+00:00" title="October 2, 2017 at 10:10 pm">
                          October 2, 2017 at 10:10 pm							</time>
                      </a>
                    </div>

                  </footer>

                  <div className="comment-content">
                    <p>Sure, let’s have a meetup about it one day. Check out Chathu’s slides here: <a href="https://speakerdeck.com/iamchathu/hardening-wordpress-is-an-art" rel="nofollow">https://speakerdeck.com/iamchathu/hardening-wordpress-is-an-art</a></p>
                  </div>

                </article>

                <div className="comment-reply"><a rel="nofollow" className="comment-reply-link" href="/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/?replytocom=79#respond" data-commentid="79" data-postid="567" data-belowelement="div-comment-79" data-respondelement="respond" aria-label="Reply to Muhammad Muhsin">Reply</a></div>		
              </li>
            </ol>
          </li> */}

          <>
            {
              pingbacks && pingbacks.length && pingbacks.map(pingback => (
                <li id={`comment-${pingback.commentId}`} key={pingback.id} className="pingback even thread-odd thread-alt depth-1">
                  <div className="comment-body">
                    Pingback:
                    <a href="" rel="external nofollow" className="url" dangerouslySetInnerHTML={{ __html: pingback.content }} />
                  </div>
                </li>

              ))
            }
          </>
          {/* <li id="comment-80" className="pingback even thread-odd thread-alt depth-1">
            <div className="comment-body">
              Pingback: 
              <a href="http://technonstop.com/wordcamp-colombo-2017-lessons-first-time-organizer" rel="external nofollow" className="url">
                WordCamp Colombo 2017 - My Lessons as a First Time Organizer - TechNonStop
              </a>
            </div>
          </li> */}

        </ol>{/* .comment-list */}
        <div className="comment-form-flex">
          <span className="screen-reader-text">Leave a comment</span>
          <div id="respond" className="comment-respond">
            <h3 id="reply-title" className="comment-reply-title"> <small><a rel="nofollow" id="cancel-comment-reply-link" href="/mtwoblog.com/2017/10/02/wordcamp-colombo-2017-from-the-front-row/#respond" style={{ display: 'none' }}>Cancel reply</a></small></h3>			<form action="http://localhost/mtwoblog.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="">
              <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p><p className="comment-form-comment"><label htmlFor="comment">Comment</label> <textarea id="comment" name="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea></p><p className="comment-form-author"><label htmlFor="author">Name <span className="required">*</span></label> <input id="author" name="author" type="text" defaultValue="" size="30" maxLength="245" required="required" /></p>
              <p className="comment-form-email"><label htmlFor="email">Email <span className="required">*</span></label> <input id="email" name="email" type="email" defaultValue="" size="30" maxLength="100" aria-describedby="email-notes" required="required" /></p>
              <p className="comment-form-url"><label htmlFor="url">Website</label> <input id="url" name="url" type="url" defaultValue="" size="30" maxLength="200" /></p>
              <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" /> <input type="hidden" name="comment_post_ID" defaultValue="567" id="comment_post_ID" />
                <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0" />
              </p>			</form>
          </div>{/* #respond */}
          <h2 className="comments-title" aria-hidden="true">Leave a comment</h2>
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost
