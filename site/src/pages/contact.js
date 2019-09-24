import React from "react"
import { Layout, SEO } from "gatsby-theme-twentynineteen"
import ContactForm from "../components/contact-form"

const ContactPage = () => {

  return (
    <Layout>
      <SEO title={`Contact Page`} description={`Fill this form and submit to reach us.`} />
      <article
        className={`page type-page status-publish hentry entry`}
      >
        <header className="entry-header">
          <h1 className="entry-title">Contact</h1>
          <div className="entry-meta" />
        </header>
        <div className="entry-content">
            <ContactForm />
        </div>
        <footer className="entry-footer" />
      </article>
    </Layout>
  )
}

export default ContactPage
