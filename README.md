# Twenty Nineteen Gatsby Theme
A port of the Twenty Nineteen WordPress Theme over to Gatsby. Check out the [demo site](https://twentynineteen-gatsby-theme.netlify.com).

This repo contains the source code for a site using the above [Gatsby theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/).

## How to use this repo
```
# Clone the repo
git clone https://github.com/zgordon/twentynineteen-gatsby-theme.git

# Move into the new directory
cd twentynineteen-gatsby-theme

# Install dependencies
yarn

# Start the site on http://localhost:8000
yarn start
```

## Contact Form

We added contact form support using Contact Form 7 (CF7) at the backend. Please follow these steps to get it working on your Gatsby site:

1.  Install `Contact Form 7` plugin on your WordPress site
2.  Install `Advanced Contact form 7 DB` plugin on your WordPress site to check if you are receiving your form data.
3.  Set up contact form similar to this:

```
<label> Your Name (required)
    [text* your-name] </label>

<label> Your Email (required)
    [email* your-email] </label>

<label> Your Website
    [text your-website] </label>

<label> Your Message
    [textarea your-message] </label>

[submit "Send"]
```

4. Add your contact form to a page and test if it's working. (This step is important.)
5. Head over `starter/src/components/contact-form.js` on this project and make sure the form fields are consistent with the step 3. Change the `formId` variable in `site/src/components/contact-form.js:64` to the ID of the CF7 form on your site.
6. Render the component in any page and test your Gatsby site. Currently, it's rendering in `starter/src/pages/contact.js`

---
If this is your first time using Yarn workspaces, [check out the docs](https://yarnpkg.com/lang/en/docs/workspaces/).

## Links and further reading
- https://gatsbywpthemes.com/
- https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/
- https://javascriptforwp.com/porting-the-twenty-nineteen-wordpress-theme-to-gatsby/
- https://wordpress.tv/2018/02/26/jason-bahl-wpgraphql-interacting-with-wordpress-data-in-a-new-way/

## Team members
- https://twitter.com/zgordon
- https://twitter.com/muhsinlk
- https://twitter.com/jasonbahl
- https://twitter.com/hussain_thaj
