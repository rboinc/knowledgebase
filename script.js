var SearchResult = [
  {title: 'Home', link: '/'/*, label: 'Label is optional', description: 'Description is optional'*/},
  {title: 'About', link: '/about'},
  {title: 'Page 1', link: '/page1'},
  {title: 'Page 2', link: '/page2'},
];

const searchBar = entries => {
  return {
      name: 'searchBar',
      extend(api) {
          api.enableSearch(
              {
                  handler: keyword => {
                      return entries.filter(value =>
                          value.title.toLowerCase().includes(keyword.toLowerCase()))
                  }
              }
          );
      }
  }
}

new Docute({
  target: '#docute',
  title: 'RBO OrderForge Knowledge Base'
  darkThemeToggler: true,
  sourcePath: '/guide',
  plugins: [
    searchBar(SearchResult)
],
editLinkBase: 'https://github.com/rboinc/rboinc.github.io/guide',
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
