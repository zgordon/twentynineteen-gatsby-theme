import {CF2Form} from '@calderajs/forms'
import axios from 'axios';
import React from "react";

const FIRST_NAME_ID = 'name';
const COMMENTS_FIELD_ID = 'comments_questions';
const EMAIL_FIELD_ID = 'email';
const SUBMIT_BUTTON_FIELD_ID = 'submit';

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
};


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

/**
 * Caldera Forms Contact Form
 *
 * @param {string} apiRootUrl API Root URL including wp-json/cf-api
 * @return {*}
 * @constructor
 */
export const ContactForm = ({apiRootUrl}) => (
	<CF2Form
		formConfig={formConfig}
		axios={axios}
		apiRootUri={apiRootUrl}
	/>
);
