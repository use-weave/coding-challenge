import { LitElement, css, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';

import './mapbox-map.js';
import './weave-driver-list.js';
import './weave-order-list.js';

window.customElements.define('weave-assign-orders', class extends LitElement {
	static get styles() {
		return [
			css`
				/* Wide layout: when the viewport width is bigger than 460px, layout
        	 changes to a wide layout */
        @media (min-width: 460px) {
        	:host {
        		height: 100%;
        	}
					.grid-wrapper {
						display: grid;
						grid-template-areas: "driver-list map"
																 "order-list  map";
						grid-template-columns: 30rem 1fr;
						grid-template-rows: 1fr 1fr;
						height: 100%;
					}

        }
			`
		]
	}

	render() {
		return html`
			<div class="grid-wrapper">
				<weave-driver-list></weave-driver-list>
				<weave-order-list></weave-order-list>
				<mapbox-map></mapbox-map>
			</div>
		`
	}
})