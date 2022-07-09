import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { localDateFromUTC } from '../../utils/date'
import './date-display'

@customElement('change-datection')
export class ChangeDatection extends LitElement {
  @property({ type: Date }) date?: Date

  render() {
    return html`
      <p>Choose a date: <input type="date" @change=${this._dateChanged} /></p>
      <p><button @click=${this._chooseToday}>Choose Today</button></p>
      <p>Date chosen: <date-display .date=${this.date}></date-display></p>
    `
  }

  private _dateChanged(e: Event) {
    const utcDate: Date | null = (e.target as HTMLInputElement).valueAsDate
    if (utcDate) {
      this.date = localDateFromUTC(utcDate)
    }
  }

  private _chooseToday() {
    this.date = new Date()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'change-datection': ChangeDatection
  }
}
