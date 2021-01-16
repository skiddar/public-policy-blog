export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '600265d79d07521b572e9b92',
                  title: 'Sanity Studio',
                  name: 'public-policy-blog-studio',
                  apiId: 'bb53864d-57f3-4820-9fce-bbd6edae3aa8'
                },
                {
                  buildHookId: '600265d751163932e6e7b553',
                  title: 'Blog Website',
                  name: 'public-policy-blog',
                  apiId: 'c8f9b1b6-6c99-4b3f-b410-3e6be9a9e8fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skiddar/public-policy-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://public-policy-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
