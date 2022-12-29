import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-header')
class MyHeader extends LitElement {
  static style = css`
    h1 {
      font-family: Manrepo, sans-serif;
      text-align: center;
    }
  `
  render() {
    return html` <header><h1>Element composition</h1></header> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-header': MyHeader
  }
}
