import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('conditional-templates')
export class ConditionalTemplates extends LitElement {
  @property({ type: Boolean })
  condition = true

  render() {
    return html`
      <p>Render content conditionally</p>
      ${this.condition
        ? html` <p>Render some HTML if condition is true.</p> `
        : html` <p>Render some other HTML if condition is false.</p> `}
      <button type="button" @click=${this._onClick}>Toggle condition</button>
    `
  }

  private _onClick() {
    this.condition = !this.condition
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'conditional-templates': ConditionalTemplates
  }
}
