import React from 'react'
import Layout from "../../components/layout";

const SingleTag = props => {
    const { pageContext: { name }} = props;
    return(
        <Layout>
            <div>Single Tag: {name}</div>
        </Layout>
    )
};

export default SingleTag
