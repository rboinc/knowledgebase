new Docute({
  target: '#docute',
  darkThemeToggler: true,
  sourcePath: '/guide',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
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
