import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './my-header'
import './my-article'
import './my-footer'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('element-composition')
export class ElementComposition extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'element-composition': ElementComposition
  }
}
