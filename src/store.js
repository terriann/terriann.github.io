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
          title: 'Mini Barn Quilts',
          url: 'portfolio/minibarnquilts',
          thumbnail: '/static/images/portfolio/thumb/minibarnquilts.png',
          tags: [
            'Shopify',
            'ECommerce',
            'Marketing'
          ]
        },
        quiltalong: {
          title: 'QuiltAlong.net',
          url: 'portfolio/quiltalong',
          thumbnail: '/static/images/portfolio/thumb/quiltalong.png',
          tags: [
            'CMS',
            'Amazon S3',
            'Directory'
          ]
        },
        iappguide: {
          title: 'iAppGuide.com',
          url: 'portfolio/iappguide',
          thumbnail: '/static/images/portfolio/thumb/iappguide.png',
          tags: [
            '3rd Party APIs',
            'Affiliate Marketing',
            'Twitter Automation',
            'Code Igniter'
          ]
        },
        ivesgroup: {
          title: 'IVES Group',
          url: 'portfolio/ives',
          thumbnail: '/static/images/portfolio/thumb/ivesgroup.png',
          tags: [
            'Bootstrap'
          ]
        },
        goby: {
          title: 'goby.com',
          url: 'portfolio/goby',
          thumbnail: '/static/images/portfolio/thumb/goby.png',
          tags: [
            'PHP',
            'OpenX',
            'Varnish',
            'Memcached',
            'Jenkins CI'
          ]
        },
        scout: {
          title: 'Scout.me',
          url: 'portfolio/scout',
          thumbnail: '/static/images/portfolio/thumb/scout.png',
          tags: [
            'Backbone',
            'PHP',
            'Varnish',
            'Memcached',
            'Grunt',
            'SASS'
          ]
        },
        portfolio: {
          title: 'My Portfolio',
          url: 'portfolio/portfolio',
          thumbnail: '/static/images/portfolio/thumb/portfolio.png',
          tags: [
            'Vue.js',
            'ES6'
          ]
        },
        simplypinterest: {
          title: 'Simply Pinterest',
          url: 'portfolio/simplypinterest',
          thumbnail: '/static/images/portfolio/thumb/simplypinterest.png',
          tags: [
            'WordPress Plugin',
            'Social Media Marketing',
            'JavaScript'
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
