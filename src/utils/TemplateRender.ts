import { ComponentOptions } from 'vue/types/options'
import Vue from 'vue'

export default class TemplateRender {
  static render<V extends Vue = Vue>(template = '', options?: ComponentOptions<V>): Vue {
    const htmlVue = new Vue({
      el: document.createElement('div'),
      ...options,
      template: template
    })
    return htmlVue
  }

  static renderOptions<V extends Vue = Vue>(options: ComponentOptions<V>): Vue {
    const htmlVue = new Vue({
      el: document.createElement('div'),
      ...options
    })
    return htmlVue
  }
}
