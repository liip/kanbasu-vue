```vue
const Vue = require('vue').default;
Vue.component('media-left', require('../MediaLeft').default);
Vue.component('media-body', require('../MediaBody').default);

<media>
  <media-left>
    <img src="https://placehold.it/200x200" />
  </media-left>
  <media-body>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime at dignissimos laudantium cupiditate, nobis reiciendis ipsum ratione pariatur alias quo voluptatem molestias exercitationem harum in? Placeat impedit ab culpa? Deleniti nisi explicabo ut dicta recusandae sapiente officiis minus fuga.
  </media-body>
</media>
```

```vue
const Vue = require('vue').default;
Vue.component('media-right', require('../MediaRight').default);
Vue.component('media-body', require('../MediaBody').default);

<media align="bottom" responsive>
  <media-right>
    <img src="https://placehold.it/200x200" />
  </media-right>
  <media-body>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime at dignissimos laudantium cupiditate, nobis reiciendis ipsum ratione pariatur alias quo voluptatem molestias exercitationem harum in? Placeat impedit ab culpa? Deleniti nisi explicabo ut dicta recusandae sapiente officiis minus fuga.
  </media-body>
</media>
```