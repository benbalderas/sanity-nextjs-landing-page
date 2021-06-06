export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bd5ae90136238b60643981',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-968fw7e1',
                  apiId: '40db4b0c-8c50-45d6-9f04-05ae4b45e424'
                },
                {
                  buildHookId: '60bd5aea497c42216e933be5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-yuujzdof',
                  apiId: 'bd78ea50-cc32-4422-8043-3cf69fca08e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benbalderas/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-yuujzdof.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
