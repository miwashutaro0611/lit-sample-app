import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('custom-atribute-converter')
export class CustomAtributeConverter extends LitElement {
  @property({
    converter: (attrValue: string | null) => {
      return attrValue ? new Date(attrValue) : undefined
    },
  })
  date?: Date

  render() {
    return html`
      ${this.date
        ? html` <p>Date is <span id="datefield">${this.date.toLocaleDateString()}</span></p> `
        : 'No data set'}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-atribute-converter': CustomAtributeConverter
  }
}
