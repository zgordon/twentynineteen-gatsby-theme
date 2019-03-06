import React from "react";
import Layout from "../../components/layout";

const SinglePost = props => {
    const {
        pageContext: { id, postId, title, content }
    } = props;

    return (
        <Layout>
            <article
                data-id={id}
                id={`post-${postId}`}
                className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
            >
                <header className="entry-header">
                    <h1 className="entry-title">{title}</h1>
                    <div className="entry-meta" />
                    {/* .meta-info */}
                </header>

                <div
                    className="entry-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                {/* .entry-content */}

                <footer className="entry-footer" />
            </article>
            {/* #post-${ID} */}
        </Layout>
    );
};

export default SinglePost;
