import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {CF2Form} from '@calderajs/forms'
import axios from 'axios';

const FIRST_NAME_ID = 'name';
const COMMENTS_FIELD_ID = 'comments_questions';
const EMAIL_FIELD_ID = 'email';
const SUBMIT_BUTTON_FIELD_ID = 'fld_7908577';

const firstNameField = {
	fieldType: 'text',
	value: '',
	label: 'First Name',
	fieldId: FIRST_NAME_ID,
	required: true
};

const emailField = {
	fieldType: 'text',
	value: '',
	label: 'Last Name',
	fieldId: EMAIL_FIELD_ID,
	required: true
};

const commentsField = {
	fieldType: 'textarea',
	value: '',
	label: 'Your Message',
	fieldId: COMMENTS_FIELD_ID,
	required: false
}


const submitButton = {
	fieldId: SUBMIT_BUTTON_FIELD_ID,
	label: 'Send Your Message',
	fieldType: 'submit',
};

const formId = 'contact';

const formConfig = {
	ID: formId,
	rows: [
		{
			columns: [
				{
					fields: [FIRST_NAME_ID],
					width: '1/2',
				},
				{
					fields: [EMAIL_FIELD_ID],
					width: '1/2',
				}
			]
		},
		{
			columns: [
				{
					fields: [COMMENTS_FIELD_ID],
					width: '100',
				}
			]
		},
		{
			columns: [
				{
					fields: [SUBMIT_BUTTON_FIELD_ID],
					width: '1',
				},
			]
		},
	],
	fields: [
		submitButton,
		firstNameField,
		emailField,
		commentsField
	],
	conditionals: []
};

let rowIndex = 1;
let columnIndex;
formConfig.rows.forEach( row => {
	row.rowId = `row-${rowIndex}`;
	columnIndex = 1;
	row.columns.forEach( column => {
		column.columnId =`row-${rowIndex}-column-${columnIndex}`;
		columnIndex ++;
	});
	rowIndex++;
} );

const SinglePage = props => {
  const {
    pageContext: { id, postId, content, excerpt },
  } = props;

    const title = 'Every Page Is The Contact Page';

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
				apiRootUri={'https://formcalderas.lndo.site/wp-json/cf-api'}
			/>
        </div>
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
};

export default SinglePage
