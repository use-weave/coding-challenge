import { LitElement, css, html } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { assignOrders } from '../actions/assignments.js';

// Lazy Loading Reducers
import assignments, { selectedOrdersCountSelector } from '../reducers/assignments.js';
import drivers from '../reducers/drivers.js';
store.addReducers({
    assignments,
    drivers
});

import './weave-driver-detail.js';
import './weave-driver-list-item.js';

window.customElements.define('weave-driver-list', class extends connect(store)(LitElement) {

    static get properties() {
        return {
            _assignments: Object,
            _drivers: Array,
            _selectedOrdersCount: Number,
            // _orders: Array,
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
        console.log('_assignments', this._assignments);
        return html`
            <section>
                <h2>Drivers</h2>

                ${this._drivers.map(driver => html`
                    <weave-driver-list-item
                        @assign-orders="${this._assignOrders}"
                        driver_id="${driver.id}"
                        name="${driver.name}"
                        order_count="${
                            this._assignments.drivers.hasOwnProperty(driver.id)
                                ? this._assignments.drivers[driver.id].length
                                : 0
                        }"
                        orders_selected="${this._selectedOrdersCount}"
                        status="${driver.status}"
                    ></weave-driver-list-item>
                    <weave-driver-detail
                        driver_id="${driver.id}"
                        vehicle_license="${driver.vehicle_license}"
                        vehicle_name="${driver.vehicle_name}"
                    ></weave-driver-detail>
                `)}

            </section>
        `;
    }

    _assignOrders(e) {
        store.dispatch(assignOrders(e.detail.driver_id));
    }

    stateChanged(state) {
        this._drivers = state.drivers;
        this._assignments = state.assignments;
        this._selectedOrdersCount = selectedOrdersCountSelector(state);
    }
});
