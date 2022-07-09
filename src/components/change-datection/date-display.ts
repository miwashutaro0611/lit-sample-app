import type { PropertyValues } from 'lit';
import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { isSameDate } from '../../utils/date'

@customElement('date-display')
class DateDisplay extends LitElement {
  @property({
    hasChanged(value?: Date, oldValue?: Date) {
      return !isSameDate(value, oldValue)
    },
  })
  date?: Date

  @query('#datefield')
  datefield!: HTMLSpanElement

  frames = [{ backgroundColor: '#fff' }, { backgroundColor: '#324fff' }, { backgroundColor: '#fff' }]

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`
  }

  updated(chnaged: PropertyValues<this>) {
    if (chnaged.has('date')) {
      this.datefield.animate(this.frames, 1000)
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'date-display': DateDisplay
  }
}
