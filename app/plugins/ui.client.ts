import { defineNuxtPlugin } from '#app'

// Безопасный ESM-импорт
import * as VueDatePickerModule from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import * as MultiselectModule from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

export default defineNuxtPlugin((nuxtApp) => {
    // Достаем компонент независимо от того, в каком формате Vite его собрал
    const VueDatePicker = VueDatePickerModule.default || VueDatePickerModule
    const Multiselect = MultiselectModule.default || MultiselectModule

    // Глобально регистрируем
    nuxtApp.vueApp.component('VueDatePicker', VueDatePicker)
    nuxtApp.vueApp.component('Multiselect', Multiselect)
})
