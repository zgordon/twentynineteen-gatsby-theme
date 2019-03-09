import React from "react"
import RecentPostsWidget from "./recent-posts-widget"

const Footer = props => (
  <footer id="colophon" className="site-footer">
    <aside className="widget-area" aria-label="Footer">
      <div className="widget-column footer-widget-1">
        <RecentPostsWidget />
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
