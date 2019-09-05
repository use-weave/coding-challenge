import { LitElement, css, html } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// Lazy Loading Reducers
import drivers from '../reducers/drivers.js';
store.addReducers({ drivers });

import './weave-driver-list-item.js';

window.customElements.define('weave-driver-list', class extends connect(store)(LitElement) {

    static get properties() {
        return {
            // _orders: Array,
            _drivers: Array,
            // _assignments: Object,
        }
    }

    static get styles() {
        return [
            ResetStyles,
            SharedStyles,
            css`
                :host {
                    margin-bottom: 1rem;
                }

                h2 {
                    font-size: 1.5rem;
                    padding: 0.25rem 1rem;
                }
            `,
        ];
    }

    render() {
        return html`
            <section>
                <h2>Drivers</h2>

                ${this._drivers.map(driver => html`
                    <weave-driver-list-item
                        name="${driver.name}"
                        orderCount="${driver.orderCount}"
                        status="${driver.status}"
                    />
                `)}

            </section>
        `;
    }

    stateChanged(state) {
        this._drivers = state.drivers;
        // this._assignments = state.assignments;
    }
});
