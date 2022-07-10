import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('slotting-children')
export class SlottingChildren extends LitElement {
  static styles = css`
    ::slotted(*) {
      border: 1px solid #00f;
      padding: 6px;
    }
  `

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slotting-children': SlottingChildren
  }
}
