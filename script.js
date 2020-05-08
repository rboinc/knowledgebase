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
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
