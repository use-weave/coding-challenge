import { LitElement, css, html } from "../../node_modules/lit-element/lit-element.js";
import { SharedStyles } from './shared-styles.js';
import { store } from '../store.js';
import { connect } from "../../node_modules/pwa-helpers/connect-mixin.js"; // Lazy Loading Reducers

import assignments from '../reducers/assignments.js';
import drivers from '../reducers/drivers.js';
import orders from '../reducers/orders.js';
store.addReducers({
  assignments,
  drivers,
  orders
});
import './weave-driver.js';
window.customElements.define('weave-driver-assignments', class extends connect(store)(LitElement) {
  static get properties() {
    return {
      _orders: Array,
      _drivers: Array,
      _assignments: Object
    };
  }

  static get styles() {
    return [SharedStyles, css`
                :host {
                    padding: 8px 16px;
                }
            `];
  }

  render() {
    return html`
            <section>
                <h2>Orders</h2>

                ${this._orders.map(order => html`
                    <div>${order.id}</div>
                `)}

            </section>

            <section>
                <h2>Drivers</h2>

                ${this._drivers.map(driver => html`
                    <weave-driver
                        name="${driver.name}"></weave-driver>
                `)}

            </section>

            
        `;
  }

  stateChanged(state) {
    this._orders = state.orders;
    this._drivers = state.drivers;
    this._assignments = state.assignments;
  }

});