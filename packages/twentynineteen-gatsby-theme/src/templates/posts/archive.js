import React from 'react'
import Layout from "../../components/layout";
import { Link } from 'gatsby'

const BlogArchive = props => {
    const {
        pageContext: {nodes, pageNumber, hasNextPage}
    } = props;

    return (
        <Layout>
            <h1>Blog Page {pageNumber}</h1>
            <div>
                {(nodes && nodes.map(post => {
                    const{ id, postId, title, excerpt, uri, author } = post;
                    return(
                        <div data-id={id} id={`post-preview-${postId}`}>
                            <Link to={`/blog/${uri}`}><h2>{title}</h2></Link>
                            <div dangerouslySetInnerHTML={{__html: excerpt}} />
                        </div>
                    )
                }))}
            </div>
        </Layout>
    );
};

export default BlogArchive;
