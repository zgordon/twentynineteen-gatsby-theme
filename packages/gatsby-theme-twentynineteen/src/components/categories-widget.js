import React from "react"

const CategoriesWidget = props => {
  return (
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
          <a href="http://localhost/mtwoblog.com/category/lessons/">Lessons</a>
        </li>
        <li className="cat-item cat-item-9">
          <a href="http://localhost/mtwoblog.com/category/mobile/">Mobile</a>
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
  )
}

export default CategoriesWidget
