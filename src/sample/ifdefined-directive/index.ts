import { LitElement, html } from 'lit'
import { customElement, state, query } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

const imageInfo = {
  beach: { domain: 'picsum.photos', id: 100 },
  river: { domain: 'picsum.photos', id: 1015 },
  canyon: { domain: 'picsum.photos', id: 1016 },
}

type ImageKey = keyof typeof imageInfo

@customElement('ifdefined-directive')
export class IfdefinedDirective extends LitElement {
  @state()
  private imageName: ImageKey = 'beach'

  @query('input#name')
  private input!: HTMLInputElement

  render() {
    const info = imageInfo[this.imageName]

    return html`
      <h3>ifDefined directive example</h3>
      Type one of 'beach', 'river', or 'canyon':<br />
      <input id="name" .value=${this.imageName} @input=${this._updateImage} />
      <hr />
      Using ifDefined (src removed when undefined):<br />
      <img src="https://${ifDefined(info?.domain)}/id/${ifDefined(info?.id)}/200/200" />
      <hr />
      Without ifDefined (will 404 when undefined):<br />
      <img src="https://${info?.domain}/id/${info?.id}/200/200" />
    `
  }
  private _updateImage() {
    this.imageName = this.input.value as ImageKey
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ifdefined-directive': IfdefinedDirective
  }
}
