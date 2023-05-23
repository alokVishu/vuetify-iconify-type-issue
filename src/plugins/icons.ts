import { Icon } from '@iconify/vue'
import { aliases } from 'vuetify/iconsets/mdi'
import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'

const alertTypeIcon = {
  success: 'mdi-check-circle-outline',
  info: 'mdi-information-outline',
  warning: 'mdi-alert-outline',
  error: 'mdi-alert-circle-outline',
}

const modifiedAliases:IconAliases = Object.assign(aliases, alertTypeIcon)

export const iconify:IconSet = {
  component: (props: IconProps) => h(Icon, props),
}

export const icons = {
  defaultSet: 'iconify',
  mergedAliases: modifiedAliases,
  sets: {
    iconify,
  },
}
