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
                  buildHookId: '5f4f0076a20a7e205eaa7034',
                  title: 'Sanity Studio',
                  name: 'academiasanitylanding-studio',
                  apiId: '60815146-c657-4997-867f-b683dcfb85bc'
                },
                {
                  buildHookId: '5f4f0076296b411eb41ad411',
                  title: 'Landing pages Website',
                  name: 'academiasanitylanding',
                  apiId: '780b7599-21fa-42df-a13a-59232befd7b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amplitudeacademia/academiasanitylanding',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://academiasanitylanding.netlify.app', category: 'apps'}
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
