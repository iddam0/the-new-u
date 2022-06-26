import Dashboard from './pages/dashboard';
import About from './pages/about';

export default {
  pages: () => [
    {
      label: 'Profile',
      path: '',
      component: Dashboard,
    },
    {
      label: 'The Collective',
      path: 'about',
      component: About,
    },
    {
      label: 'Bands',
      children: [
        { label: 'Main Profile', listKey: 'Post' },
        { label: 'Sites', listKey: 'PostCategory' },
        { listKey: 'Comment' },
      ],
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    {
        label: 'E-commerce',
        children: [
          { label: 'Medusa', listKey: 'Post' },
        ],
    },
    {
        label: 'Themes',
        children: [
          { label: 'Palletes', listKey: 'style_test' },
          { label: 'Address', listKey: 'PostCategory' },
          { listKey: 'Comment' },
        ],
    },
    {
      label: 'People',
      children: ['User'],
    },
  ],
};