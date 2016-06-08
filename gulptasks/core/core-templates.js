'use strict';

let templates = function(){
  const TEMPLATE_DATA = [
    {
      name: 'email-A'
      , _d: {
        title: 'My title A'
        , preheader: 'A catchy headline that\'ll boost up your opens rate'
        , staticContent: 'any'
        , theme: 'forest'
      }
    }
    , {
      name: 'email-B'
      , _d: {
        title: 'Some random title B'
        , preheader: 'Preheader headline'
        , staticContent: 'all'
        , theme: 'tomato'
      }
    }
  ]

  return {
    data: TEMPLATE_DATA
  }
}

module.exports = templates();
