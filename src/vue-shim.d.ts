import 'vue-router'

declare module 'vue' {
  interface ComponentCustomProperties {
    $router: ReturnType<typeof import('vue-router')['useRouter']>;
    $route: ReturnType<typeof import('vue-router')['useRoute']>;
  }
}
