import { LitElement, css, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';

import './weave-driver-list.js';
import './weave-order-list.js';

window.customElements.define('weave-assign-orders', class extends LitElement {
	render() {
		return html`
			<weave-driver-list></weave-driver-list>
			<weave-order-list></weave-order-list>
		`
	}
})