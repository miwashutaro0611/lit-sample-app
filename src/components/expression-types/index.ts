import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('expression-types')
export class ExpressionTypes extends LitElement {
  @property({ type: String })
  bodyText = 'Text in child expression'
  @property({ type: String })
  label = 'A label, for ARIA.'
  @property({ type: Boolean })
  editing = true
  @property({ type: Number })
  value = 7

  render() {
    return html`
      <!-- Child expression -->
      <div>Child expression: ${this.bodyText}</div>
      <!-- attribute expression -->
      <div aria-label=${this.label}>Attribute expression</div>
      <!-- Boolean attribute expression -->
      <div>
        Boolean attribute expression.
        <input type="text" ?disabled=${!this.editing} />
      </div>
      <!-- property expression -->
      <div>
        Property expression.
        <input type="number" .valueAsNumber=${this.value} />
      </div>
      <!-- event listener expression -->
      <div>
        Event listener expression.
        <button type="button" @click="${this._clickHandler}">Click</button>
      </div>
    `
  }

  private _clickHandler() {
    this.editing = !this.editing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expression-types': ExpressionTypes
  }
}
