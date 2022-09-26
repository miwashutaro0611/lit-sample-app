import { LitElement, html } from 'lit'
import { customElement, state, query } from 'lit/decorators.js'
import { guard } from 'lit/directives/guard.js'
import { calculateSHA } from './calculate-sha'

@customElement('guard-directive')
export class GuardDirective extends LitElement {
  @state()
  private value = 'test string'

  @state()
  private counter = 0

  @query('input#value')
  private input!: HTMLInputElement

  render() {
    return html`
      <h3>guard directive example</h3>
      <input id="value" .value=${this.value} />
      <button type="button" @click=${this._updateValue}>Calculate</button>
      <br />
      The SHA for '${this.value}' is:
      <div>${guard([this.value], () => calculateSHA(this.value))}</div>
      Incrementing the counter does not recalculate SHA:<br />
      <button @click=${this._incrementCounter}>Increment: ${this.counter}</button>
    `
  }

  private _updateValue() {
    this.value = this.input.value
  }

  private _incrementCounter() {
    this.counter++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guard-directive': GuardDirective
  }
}
