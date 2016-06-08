'use strict'

const MJML_DICTIONARY = {
  'table, tr, td, img': [
    'width'
    , 'height'
    , 'align'
  ]
  , 'table, td': [ 'bgcolor' ]
  , 'table': [
    , 'cellpadding'
    , 'cellspacing'
  ]
  , 'td': [
    'valign'
  ]
  , 'img': [
    'border'
  ]
  , 'v\\:rect': [
    'width'
    , 'height'
    , 'color'
    , 'strokecolor'
    , 'arcsize'
  ]
  , 'mj-body, mj-container, mj-section, mj-column, mj-button': [ 'background-color' ]
  , 'mj-container': [
    'width'
    , 'font-size'
    , 'background-color'
  ]
  , 'mj-section': [
    'full-width'
    , 'background-color'
    , 'background-url'
    , 'background-repeat'
    , 'background-size'
    , 'vertical-align'
    , 'text-align'
    , 'padding'
    , 'padding-top'
    , 'padding-bottom'
    , 'padding-left'
    , 'padding-right'
  ]
  , 'mj-column': [
    'width'
    , 'vertical-align'
    , 'background-color'
  ]
  , 'mj-text': [
    'color'
    , 'font-family'
    , 'font-size'
    , 'font-style'
    , 'font-weight'
    , 'line-height'
    , 'text-decoration'
    , 'align'
    , 'container-background-color'
    , 'padding'
    , 'padding-top'
    , 'padding-bottom'
    , 'padding-left'
    , 'padding-right'
  ]
  , 'mj-button': [
    'container-background-color'
    , 'border-radius'
    , 'font-style'
    , 'font-size'
    , 'font-weight'
    , 'font-family'
    , 'color'
    , 'border'
    , 'text-decoration'
    , 'align'
    , 'vertical-align'
    , 'href'
    , 'padding'
    , 'padding-top'
    , 'padding-bottom'
    , 'padding-left'
    , 'padding-right'
  ]
  , 'mj-table': [
    'color'
    , 'font-family'
    , 'font-size'
    , 'line-height'
    , 'container-background-color'
    , 'padding'
    , 'width'
    , 'table-layout'
  ]
}

module.exports = MJML_DICTIONARY
