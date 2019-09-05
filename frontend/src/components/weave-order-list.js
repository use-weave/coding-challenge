import { LitElement, css, html } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// Lazy Loading Reducers
import assignments from '../reducers/assignments.js';
import orders from '../reducers/orders.js';
store.addReducers({
	assignments,
	orders,
});

import './weave-order-list-item.js';
import './weave-order-detail.js';

window.customElements.define('weave-order-list', class extends connect(store)(LitElement) {
	static get properties() {
		return {
			_orders: Array,
			_assignments: Object,
		}
	}

	static get styles() {
		return [
			ResetStyles,
			SharedStyles,
			css`
				:host {
        }

        h2 {
        	font-size: 1.5rem;
        	padding: 0.25rem 1rem;
        }
			`
		]
	}

	render() {
		console.log('example', this._orders[0].statusList);
		return html`
			<section>
        <h2>Orders</h2>

        ${this._orders.map(order => html`
            <weave-order-list-item
            	created=${order.created}
            	customer=${order.customer}
            	orderId=${order.id}
            	status=${order.statusList[order.statusList.length - 1].status}
          	></weave-order-list-item>
          	<weave-order-detail
          		address_street=${order.address_street}
							address_city=${order.address_city}
							address_state=${order.address_state}
							address_zip=${order.address_zip}
							created=${order.created}
							customer=${order.customer}
							items=${order.items}
							orderId=${order.id}
							.statusList=${order.statusList}
							total=${order.total}
          	></weave-order-detail>
        `)}

    	</section>
		`
	}
	

	stateChanged(state) {
		this._orders = state.orders;
		this._assignments = state.assignments;
	}
});
