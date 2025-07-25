import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ShowSniper-docs/blog/',
    component: ComponentCreator('/ShowSniper-docs/blog/', 'e1a'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/archive/',
    component: ComponentCreator('/ShowSniper-docs/blog/archive/', '959'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/authors/',
    component: ComponentCreator('/ShowSniper-docs/blog/authors/', '80b'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/ShowSniper-docs/blog/authors/all-sebastien-lorber-articles/', 'e38'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/authors/yangshun/',
    component: ComponentCreator('/ShowSniper-docs/blog/authors/yangshun/', '6e6'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/first-blog-post/',
    component: ComponentCreator('/ShowSniper-docs/blog/first-blog-post/', 'be0'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/long-blog-post/',
    component: ComponentCreator('/ShowSniper-docs/blog/long-blog-post/', '32b'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/mdx-blog-post/',
    component: ComponentCreator('/ShowSniper-docs/blog/mdx-blog-post/', '7cb'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/tags/',
    component: ComponentCreator('/ShowSniper-docs/blog/tags/', 'e06'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/tags/docusaurus/',
    component: ComponentCreator('/ShowSniper-docs/blog/tags/docusaurus/', '891'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/tags/facebook/',
    component: ComponentCreator('/ShowSniper-docs/blog/tags/facebook/', '178'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/tags/hello/',
    component: ComponentCreator('/ShowSniper-docs/blog/tags/hello/', '3b4'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/tags/hola/',
    component: ComponentCreator('/ShowSniper-docs/blog/tags/hola/', '7b0'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/blog/welcome/',
    component: ComponentCreator('/ShowSniper-docs/blog/welcome/', '1b5'),
    exact: true
  },
  {
    path: '/ShowSniper-docs/docs/',
    component: ComponentCreator('/ShowSniper-docs/docs/', 'c8b'),
    routes: [
      {
        path: '/ShowSniper-docs/docs/',
        component: ComponentCreator('/ShowSniper-docs/docs/', '8d1'),
        routes: [
          {
            path: '/ShowSniper-docs/docs/',
            component: ComponentCreator('/ShowSniper-docs/docs/', '272'),
            routes: [
              {
                path: '/ShowSniper-docs/docs/bot-command/',
                component: ComponentCreator('/ShowSniper-docs/docs/bot-command/', 'd2e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/configuration/',
                component: ComponentCreator('/ShowSniper-docs/docs/configuration/', '37f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/disclaimer/',
                component: ComponentCreator('/ShowSniper-docs/docs/disclaimer/', 'db8'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/discord-webhook-url/',
                component: ComponentCreator('/ShowSniper-docs/docs/discord-webhook-url/', 'da1'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/faq/',
                component: ComponentCreator('/ShowSniper-docs/docs/faq/', '7e2'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/installation/',
                component: ComponentCreator('/ShowSniper-docs/docs/installation/', 'abf'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/intro/',
                component: ComponentCreator('/ShowSniper-docs/docs/intro/', '1b9'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/kktix-format/',
                component: ComponentCreator('/ShowSniper-docs/docs/kktix-format/', '72f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/proxy/',
                component: ComponentCreator('/ShowSniper-docs/docs/proxy/', '7bc'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/session/',
                component: ComponentCreator('/ShowSniper-docs/docs/session/', '496'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/support/',
                component: ComponentCreator('/ShowSniper-docs/docs/support/', 'f04'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/task-format/',
                component: ComponentCreator('/ShowSniper-docs/docs/task-format/', 'b39'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/terms/',
                component: ComponentCreator('/ShowSniper-docs/docs/terms/', '160'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/congratulations/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/congratulations/', '8ce'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/create-a-blog-post/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/create-a-blog-post/', '178'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/create-a-document/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/create-a-document/', '6fd'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/create-a-page/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/create-a-page/', 'f9f'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/deploy-your-site/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/deploy-your-site/', 'cda'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-basics/markdown-features/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-basics/markdown-features/', '9a7'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-extras/manage-docs-versions/', 'b76'),
                exact: true
              },
              {
                path: '/ShowSniper-docs/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/ShowSniper-docs/docs/tutorial-extras/translate-your-site/', '887'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ShowSniper-docs/',
    component: ComponentCreator('/ShowSniper-docs/', '80a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
