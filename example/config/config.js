export default {
  routes: [
    {
      path: '/',
      component: '../layouts/homeLayout',
      routes: [
        {path: '/', component: './demo-foo'},
      ],
    }
  ],
}
