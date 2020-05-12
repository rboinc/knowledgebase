new Docute({
  target: '#docute',
  darkThemeToggler: true,
  sourcePath: '/guide',
  plugins: [
    searchBar(SearchResult)
  ],
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/guide/about'
    }
  ],
  sidebar: [
    {
      title: 'FAQs',
      links: [
        {
          title: 'Page1',
          link: '/page1'
        },
        {
          title: 'Page2',
          link: '/page2'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
