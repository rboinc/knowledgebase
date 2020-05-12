var SearchResult = [
  {title: 'Title', link: 'title1', label: 'Label is optional', description: 'Description is optional'},
  {title: 'Another', link: 'another'},
  {title: 'One more', link: 'one-more'},

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
