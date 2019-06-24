import React from "react"
import { Formik } from "formik"
import { StaticQuery, graphql } from "gatsby"
import axios from "axios"
import "./contact.css"

const CONTACT_QUERY = graphql`
  query ContactSectionQuery {
    site {
      _xexperimentalThemes {
        options {
          wordPressUrl
        }
      }
    }
  }
`

class ContactForm extends React.Component {
  state = {
    alertBox: false,
    alertMessage: '',
    alertClassName: '',
  }

  hideAlert() {
    setTimeout(() => {
      this.setState({ alertBox: false });
    }, 3000)
  }

  renderAlert() {
    const { alertBox, alertMessage, alertClassName } = this.state
    if (alertBox) {
      this.hideAlert();
      return (
        <div className={`alert alert-${alertClassName} alert-dismissible fade show`} role="alert">
          {alertMessage}
        </div>
      )
    }
  }

  renderValidations = values => {
    console.log('values', values)
    let errors = {};
    if (!values.name) {
      errors.name = <span className="error">Required</span>
    } else
      if (!values.email) {
        errors.email = <span className="error">Required</span>
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = <span className="error">Invalid email address</span>
      } else if (!values.website) {
        errors.website = <span className="error">Required</span>
      } else if (!values.message) {
        errors.message = <span className="error">Required</span>
      }
    return errors;
  }

  handleFormSubmit = (values, { setSubmitting, resetForm }, wordPressUrl) => {
    const url = `${wordPressUrl}/wp-json/contact-form-7/v1/contact-forms/1761/feedback`;

    const formData = new FormData();
    formData.append('your-name', values.name)
    formData.append('your-email', values.email)
    formData.append('your-website', values.website)
    formData.append('your-message', values.message)

    axios.post(url,
      formData,
      {
        headers: {
          crossDomain: true,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        this.setState({ alertBox: true, alertMessage: response.data.message, alertClassName: 'success' })
        if (response.data.status === 'validation_failed') {
          this.setState({ alertBox: true, alertMessage: response.data.message, alertClassName: 'danger' })
        }
        if (response.data.status === 'mail_sent') {
          // confirmation
        }
        setSubmitting(false);
        resetForm({})
      })
      .catch(err => {
        console.error(err);
        this.setState({ alertBox: true, alertMessage: err.data.message, alertClassName: 'danger' })
      })
  }

  render() {
    return (
      <StaticQuery
        query={CONTACT_QUERY}
        render={data => {
          const { wordPressUrl } = data.site._xexperimentalThemes[0].options;

          return (
            <section className="contact-fomr">
              {this.renderAlert()}

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  website: '',
                  message: ''
                }}
                validate={values => this.renderValidations(values)}
                onSubmit={(values, { setSubmitting, resetForm }) =>
                  this.handleFormSubmit(values, { setSubmitting, resetForm }, wordPressUrl)
                }
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-field">
                        <label htmlFor="name" className="name">Your Name:<span>(required)</span></label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name || ''}
                          aria-required={true}
                        />
                        {errors.name && touched.name && errors.name}
                      </div>
                      <div className="form-field">
                        <label htmlFor="email" className="email">Your Email:<span>(required)</span></label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email || ''}
                          aria-required={true}
                        />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="form-field">
                        <label htmlFor="website" className="website">Your Website:</label>
                        <input
                          type="text"
                          name="website"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.website || ''}
                        />
                        {errors.website && touched.website && errors.website}
                      </div>
                      <div className="form-field">
                        <label htmlFor="message" className="message">Your Message:<span>(required)</span></label>
                        <textarea
                          name="message"
                          placeholder="Message"
                          id="message"
                          cols="48"
                          rows="10"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message || ''}
                          aria-required={true}
                        />
                        {errors.message && touched.message && errors.message}
                      </div>

                      <div style={{ width: '100%' }}>
                        <button
                          className="submit-button"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                  </button>
                      </div>
                    </form>
                  )}
              </Formik>
            </section>
          )
        }}
      />
    )
  }
}

export default ContactForm;
