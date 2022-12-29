import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('repeating-templates')
export class RepeatingTemplates extends LitElement {
  @property({ type: Array })
  list: string[] = ['Peas', 'Carrots', 'Tomatoes']

  @property({ type: Boolean })
  condition = true

  render() {
    return html`
      <p>Render List</p>
      <ul>
        ${this.list.map((item, index) => html` <li>${index}: ${item}</li> `)}
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'repeating-templates': RepeatingTemplates
  }
}
