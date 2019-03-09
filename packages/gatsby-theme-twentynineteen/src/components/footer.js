import React from "react"

const Footer = props => (
  <footer id="colophon" className="site-footer">
    <aside className="widget-area" aria-label="Footer">
      <div className="widget-column footer-widget-1">
        <section id="recent-posts-2" className="widget widget_recent_entries">
          <h2 className="widget-title">Recent Posts</h2>
          <ul>
            <li>
              <a href="http://localhost/mtwoblog.com/2019/02/25/hello-world/">
                Hello world!
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2019/02/04/using-react-context-api-with-gatsby/">
                Using React Context API with Gatsby
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2019/01/23/my-2018-in-a-blog-post/">
                My 2018 in a Blog Post
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/10/18/getting-started-with-gutenberg-by-creating-your-own-block/">
                Getting Started With Gutenberg By Creating Your Own Block
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/09/23/wordpress-features/">
                My Favorite WordPress Features
              </a>
            </li>
          </ul>
        </section>
        <section
          id="recent-comments-2"
          className="widget widget_recent_comments"
        >
          <h2 className="widget-title">Recent Comments</h2>
          <ul id="recentcomments">
            <li className="recentcomments">
              <span className="comment-author-link">
                <a
                  href="http://mtwoblog.com"
                  rel="external nofollow"
                  className="url"
                >
                  Muhammad Muhsin
                </a>
              </span>{" "}
              on{" "}
              <a href="http://localhost/mtwoblog.com/2018/08/05/going-forward-with-gutenberg/#comment-84">
                Going forward with Gutenberg
              </a>
            </li>
            <li className="recentcomments">
              <span className="comment-author-link">
                <a
                  href="https://wordpress.org/"
                  rel="external nofollow"
                  className="url"
                >
                  A WordPress Commenter
                </a>
              </span>{" "}
              on{" "}
              <a href="http://localhost/mtwoblog.com/2019/02/25/hello-world/#comment-1">
                Hello world!
              </a>
            </li>
            <li className="recentcomments">
              <span className="comment-author-link">
                <a
                  href="http://mtwoblog.com/2019/01/23/my-2018-in-a-blog-post/"
                  rel="external nofollow"
                  className="url"
                >
                  My 2018 in a Blog Post - M2 Blog
                </a>
              </span>{" "}
              on{" "}
              <a href="http://localhost/mtwoblog.com/2018/07/14/24-pieces-of-advice/#comment-81">
                24 Pieces of Advice I Learnt in Life
              </a>
            </li>
            <li className="recentcomments">
              <span className="comment-author-link">phoebe</span> on{" "}
              <a href="http://localhost/mtwoblog.com/2016/01/09/dell-kb216-a-review/#comment-35">
                Dell KB216 – a review
              </a>
            </li>
            <li className="recentcomments">
              <span className="comment-author-link">
                <a
                  href="http://mtwoblog.com"
                  rel="external nofollow"
                  className="url"
                >
                  Muhammad Muhsin
                </a>
              </span>{" "}
              on{" "}
              <a href="http://localhost/mtwoblog.com/2016/01/09/dell-kb216-a-review/#comment-34">
                Dell KB216 – a review
              </a>
            </li>
          </ul>
        </section>
        <section id="archives-2" className="widget widget_archive">
          <h2 className="widget-title">Archives</h2>{" "}
          <ul>
            <li>
              <a href="http://localhost/mtwoblog.com/2019/02/">February 2019</a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2019/01/">January 2019</a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/10/">October 2018</a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/09/">
                September 2018
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/08/">August 2018</a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/2018/07/">July 2018</a>
            </li>
          </ul>
        </section>
        <section id="categories-2" className="widget widget_categories">
          <h2 className="widget-title">Categories</h2>{" "}
          <ul>
            <li className="cat-item cat-item-4">
              <a href="http://localhost/mtwoblog.com/category/gutenberg/">
                Gutenberg
              </a>
            </li>
            <li className="cat-item cat-item-7">
              <a href="http://localhost/mtwoblog.com/category/javascript/">
                JavaScript
              </a>
            </li>
            <li className="cat-item cat-item-8">
              <a href="http://localhost/mtwoblog.com/category/lessons/">
                Lessons
              </a>
            </li>
            <li className="cat-item cat-item-9">
              <a href="http://localhost/mtwoblog.com/category/mobile/">
                Mobile
              </a>
            </li>
            <li className="cat-item cat-item-10">
              <a href="http://localhost/mtwoblog.com/category/mobile-development/">
                Mobile Development
              </a>
            </li>
            <li className="cat-item cat-item-12">
              <a href="http://localhost/mtwoblog.com/category/productivity/">
                Productivity
              </a>
            </li>
            <li className="cat-item cat-item-13">
              <a href="http://localhost/mtwoblog.com/category/react/">React</a>
            </li>
            <li className="cat-item cat-item-19">
              <a href="http://localhost/mtwoblog.com/category/wordpress/">
                WordPress
              </a>
            </li>
          </ul>
        </section>
        <section id="meta-2" className="widget widget_meta">
          <h2 className="widget-title">Meta</h2>{" "}
          <ul>
            <li>
              <a href="http://localhost/mtwoblog.com/wp-admin/">Site Admin</a>
            </li>{" "}
            <li>
              <a href="http://localhost/mtwoblog.com/wp-login.php?action=logout&amp;_wpnonce=784f7bd844">
                Log out
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/feed/">
                Entries <abbr title="Really Simple Syndication">RSS</abbr>
              </a>
            </li>
            <li>
              <a href="http://localhost/mtwoblog.com/comments/feed/">
                Comments <abbr title="Really Simple Syndication">RSS</abbr>
              </a>
            </li>
            <li>
              <a
                href="https://wordpress.org/"
                title="Powered by WordPress, state-of-the-art semantic personal publishing platform."
              >
                WordPress.org
              </a>
            </li>{" "}
          </ul>
        </section>{" "}
      </div>
    </aside>
    {/* .widget-area */}

    <div className="site-info">
      <a className="site-name" href="http://localhost/mtwoblog.com/" rel="home">
        M2 Blog
      </a>
      ,
      <a href="https://wordpress.org/" className="imprint">
        Proudly powered by WordPress.{" "}
      </a>
    </div>
    {/* .site-info */}
  </footer>
)

export default Footer
