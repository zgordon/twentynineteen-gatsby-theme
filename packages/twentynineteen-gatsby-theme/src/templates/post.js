import React from "react";

const Post = props => {
  const {
    pageContext: { title, content }
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Post;
