export default {
  state:
  {
    options:
    {
      'filter': null,
      'toggleCompleted': 'Hide completed'
    },
    focus:
    {
      index: null,
      title: 'Vue Todo',
      items: [ ]
    },
    portfolio:
    {
      items:
      {
        minibarnquilts: {
          'title': 'Mini Barn Quilts',
          'slug': 'minibarnquilts',
          'url': 'portfolio/minibarnquilts',
          'description': 'I have always been a maker, so when I was prototyping a little laser cut wood quilt themed project I showed it to a few people. With a little encouragement a few months later I launched a physical product. Within the first few weeks of launching Mini Barn Quilts a contributing editor at Country Living Magazine (a Hearst Media Publication) asked if I would be part of their 2016 General Store as one of ### featured artists, producing a Country Living licensed kit for all 10 of their 2016 issues.',
          'client': 'Terri Ann Creative, LLC (self)',
          skills: 'e-Commerce, Shopify, Woo Commerce, Marketing, Entrepreneurship',
          thumbnail: '/static/images/portfolio/thumb/3.jpg',
          'photos':
          [
            {
              'filename': true,
              'caption': 'This is one item on the general tasks'
            }
          ]
        }
      }
    }
  },

  mutations:
  {
  },

  actions:
  {
  }
}
