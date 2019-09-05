import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-driver-detail', class extends LitElement {
	static get properties() {
		return {
			driver_id: String,
			vehicle_license: String,
			vehicle_name: String,
		};
	}

	static get styles() {
		return [
			ResetStyles,
			SharedStyles,
			css`
				:host{
					box-shadow: inset rgba(0,0,0,0.2) 0px -2px 2px;
					max-height: 0;
					overflow: hidden;
					transition: max-height 0.2s ease-out;
				}

				.driver-detail {
					display: grid;
					grid-template-columns: 2fr 3fr;
					padding: 1rem;
				}
			`
		];
	}

	render() {
		return html`
			<div class="driver-detail">
				<p>Driver ID</p>
				<p>${this.driver_id}</p>

				<p>Vehicle Description</p>
				<p>${this.vehicle_name}</p>

				<p>Vehicle License</p>
				<p>${this.vehicle_license}</p>
			</div>
		`;
	}
});
