# gulp-mjml-hbs-pipeline
Gulp pipeline example dedicated to build HTML emails.

## Usage

```
git clone https://github.com/Daylon/gulp-mjml-hbs-pipeline.git
```

## Templating

### Why using Handlebars

Handlebars allows us to use a neat built-in feature that make it skip partials declaration on first pass.

`\{{>partialName}}`

([Source](https://stackoverflow.com/questions/22249235/render-double-curly-brackets-inside-handlebars-partial))

### Two pass compilation

#### First round

Variants are built up.

#### Second pass

Data in embed in.


