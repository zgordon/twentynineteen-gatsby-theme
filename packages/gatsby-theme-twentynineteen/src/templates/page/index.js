import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {CF2Form} from '@calderajs/forms'
import axios from 'axios';

const firstNameField = {
	fieldType: 'text',
	value: '',
	label: 'First Name',
	fieldId: 'fld_8768091',
	description: 'Your first name',
	required: true
};

const lastNameField = {
	fieldType: 'text',
	value: '',
	label: 'Last Name',
	fieldId: 'fld_9970286',
	description: 'Your last name',
	required: true
};
const emailField = {
	fieldType: 'email',
	value: '',
	label: 'Email',
	fieldId: 'fld_6009157',
	description: 'Your email',
	required: true,
	attributes: {
		multiple: false
	}
};

const submitButton = {
	fieldId: 'fld_7908577',
	label: 'Click Me',
	fieldType: 'submit',
};

const formConfig = {
	ID: 'CF5c9f86904e447',
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [firstNameField.fieldId],
					width: '1/2',
					columnId: `r1-${firstNameField.fieldId}`
				},
				{
					fields: [lastNameField.fieldId],
					width: '1/4',
					columnId: `r1-${lastNameField.fieldId}`
				}
			]
		},
		{
			rowId: 'r2',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1',
					columnId: `r2-${emailField.fieldId}`
				},
			]
		},
		{
			rowId: 'r3',
			columns: [
				{
					fields: [submitButton.fieldId],
					width: '1',
					columnId: `r2-${emailField.fieldId}`
				},
			]
		}
	],
	fields: [
		emailField,
		firstNameField,
		lastNameField,
		submitButton
	],
	conditionals: []
};

const SinglePage = props => {
  const {
    pageContext: { id, postId, content, excerpt },
  } = props

    const title = 'Every Page Is The Contact Page'

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
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
        >
			<CF2Form
				formConfig={formConfig}
				axios={axios}
				apiRootUri={'http://dev-futurecapable.pantheonsite.io/wp-json/cf-api'}
			/>
        </div>
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
}

export default SinglePage
