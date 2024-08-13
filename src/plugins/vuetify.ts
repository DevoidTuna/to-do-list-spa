import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md2 } from 'vuetify/blueprints'
import colors from 'vuetify/util/colors'

import { pt } from 'vuetify/locale'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.shades.white,
    surface: colors.shades.white,
    primary: colors.green.lighten1,
    secondary: colors.yellow.darken1,
    tertiary: colors.grey.darken4,
    quartiary: colors.grey.darken3,
    drawerBackground: colors.grey.darken4,
    error: colors.red.base,
    info: colors.blue.base,
    success: colors.green.base,
    warning: colors.orange.base,
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
  blueprint: md2,
  icons: {
    defaultSet: 'mdi',
  },
  components: {
    ...components,
  },
  directives,
  locale: {
    locale: 'pt',
    messages: { pt },
  },
})
