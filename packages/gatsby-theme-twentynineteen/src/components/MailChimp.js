
import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

//const url = "https://joshpress.us3.list-manage.com/subscribe?u=84446eeffe4a518cc2b218998&id=45907f0c59";
const url = "//joshpress.us3.list-manage.com/subscribe/post?u=84446eeffe4a518cc2b218998&id=45907f0c59";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

export const MailChimp = () => (
	<div className={'mailchimp-form-wrap'}>
		<h2>Be Notified When New Posts Are Published</h2>
		<MailchimpSubscribe
			url={url}
			render={({ subscribe, status, message }) => (
				<div>
					<SimpleForm onSubmitted={formData => subscribe(formData)} />
					{status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
					{status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
					{status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
				</div>
			)}
		/>
		<em>A <a href="https://calderaforms.com">Caldera Form</a> Will Replace This Form Soon</em>
	</div>
)
