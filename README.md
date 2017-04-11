# hbs-mjml-seed

[![Greenkeeper badge](https://badges.greenkeeper.io/Daylon/hbs-mjml-seed.svg)](https://greenkeeper.io/)
Gulp pipeline example dedicated to build HTML emails.

## Disclaimer
_This is a mere prototype. Use it at your own risks.
This was intended to provide a faster to build a complete set of emails with custom parts and styling._

## Usage

```sh
$ git clone https://github.com/Daylon/hbs-mjml-seed.git
$ cd hbs-mjml-seed
$ gulp
```

This pipeline use `MJML` for custom email markup, `Handlebars` for templating and `SASS` for styling. Please refer to their own documentation and/or repo for help:
- [mjml.io](https://mjml.io/);
- [HandlebarsJS](http://handlebarsjs.com/);
- [Sass](http://sass-lang.com/).

## Let's keep MJML and CSS separated, shall we?

### Rationale

The same way that making HTML for email can be tedious, having to tweak CSS rules attributes by hand can be cumbersome as well. For these reasons, I didn't want to regress from my previous setup _but_ MJML is pretty much the only solution (at the time of this writing) to provide a markup capable of removing noise from your HMTL templates.

To achieve this, this pipeline leverages a fork from the fantastic lib `inline-css` by (and, in the process, `gulp-inline-css`; same author). [Here's the pull request, if you wish to weigh in](https://github.com/jonkemp/inline-css/pull/40). While this lib neatly converts class related css rules into style attributes, I tweak it up to support any custom rule, including _exotic_ ones (_e.g._ `full-width`).

Interesting side-effect: VML style attributes (for, say, call-to-actions) can now be set, so you won't have to worry about having discrepancies between templates and style rules when modifying your call-to-actions. 

### Can I change these definitions?

Yes, you can. Open up `/gulptasks/core/core-mjml.js` and start adding properties. By default, any added rule will become an attribute.

## Templating

### Why using Handlebars

Handlebars allows us to use a neat built-in feature that make it skip partials declaration on first pass.

`\{{>partialName}}`
([Source](https://stackoverflow.com/questions/22249235/render-double-curly-brackets-inside-handlebars-partial))

This way, a single handlebars template can produce multiple files, based on the first layer of variables, ready to be fed with real production data.

### Use case: theming

#### First round —Gulp task

Given a single `index.tpl`, we loop through an array of JSON data defined in `/gulptasks/core/core-templates.js`.
Each index sets up what is static: pre-header, default unsuscribe link, invoke the correct partial, etc.

#### Second pass —on server

The produced new templates (one per theme) can now be used for a specific scenario or userbase sampling.

### Shortcomings

**MJML** being a young project, some elements can still be buggy or lack optimizations; you may have to mix up both MJML and raw html.
