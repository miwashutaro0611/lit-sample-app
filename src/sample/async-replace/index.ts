import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { asyncReplace } from 'lit/directives/async-replace.js'

async function* tossCoins(count: number) {
  while (count > 0) {
    yield count--
    await new Promise((r) => setTimeout(r, 1000))
  }
}

@customElement('async-replace')
export class AsyncReplace extends LitElement {
  @state()
  private timer = tossCoins(10)

  render() {
    return html`Timer: <span>${asyncReplace(this.timer)}</span>.`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'async-replace': AsyncReplace
  }
}
