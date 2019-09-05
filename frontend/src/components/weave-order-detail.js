import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-order-detail', class extends LitElement {

	static get properties() {
		return {
			address_street: String,
			address_city: String,
			address_state: String,
			address_zip: String,
			created: String,
			customer: String,
			items: Number,
			order_id: String,
			statusList: Array,
			total: Number,
		}
	};

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

				.order-detail {
					display: grid;
					grid-template-columns: 2fr 3fr;
					padding: 1rem;
				}

				.status {
					border-bottom: 1px solid black;
					grid-column: 1 / -1;
					margin: 1rem 0 0.5rem;
				}
			`
		];
	};

	render() {
		return html`
			<div class="order-detail">
				<p>Order ID</p>
				<p>${this.order_id}</p>

				<p>Address</p>
				<p>
					${this.address_street}<br />
					${this.address_city}, ${this.address_state}<br />
					${this.address_zip}
				</p>
				
				<p>Created</p>
				<p>
					${new Date(this.created)
						.toLocaleTimeString(
							undefined,
							{
								year: 'numeric',
								month: 'short',
								day: 'numeric',
								hour: '2-digit',
								minute:'2-digit'
							}
					)}
				</p>
				
				<p>Item Count</p>
				<p>${this.items}</p>

				<p>Order Total</p>
				<p>
					${
						new Intl
							.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
							.format(this.total)
					}
				</p>

				<p class="status">Status</p>
				${this.statusList.map(i => html`
					<p>${i.status}</p>
					<div>
						<p">
							${new Date(this.created)
								.toLocaleTimeString(
									undefined,
									{
										year: 'numeric',
										month: 'short',
										day: 'numeric',
										hour: '2-digit',
										minute:'2-digit'
									}
								)
							}
						</p>
						${i.actor ? html`<p>By: ${i.actor}</p>` : null}
					</div>
				`)}
			</div>
		`
	}
});
