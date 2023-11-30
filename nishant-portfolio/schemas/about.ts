export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'string',
    },
    {
      name: 'connect',
      title: 'Connect',
      type: 'email',
    },
  ],
}
