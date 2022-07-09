import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('full-component')
export class FullComponent extends LitElement {
  static style = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `

  @property() greeting = 'Hello!'
  @property({ type: String }) planet = 'World'

  render() {
    return html`
      <span @click=${this._togglePlanet}>
        ${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `
  }

  private _togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'full-component': FullComponent
  }
}
