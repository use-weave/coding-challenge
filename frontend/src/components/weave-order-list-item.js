import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-order-list-item', class extends LitElement {
	static get properties() {
		return {
			created: String,
			customer: String,
			orderId: String,
			status: String,
		}
	}

	static get styles() {
		return [
			ResetStyles,
			SharedStyles,
			css`
				:host {
					
				}

				.id {
					font-variant-numeric: tabular-nums;
					text-align: right;
				}

				.order-item {
					align-items: center;
					cursor: pointer;
					display: flex;
					justify-content: space-between;
					padding: 0.5rem 1rem;
				}

				.order-item:hover {
					background: rgba(0, 0, 0, 0.1);
				}

				.order-item.active {
					box-shadow: var(--box-shadow);
					z-index: 1;
				}

				.time {
					text-align: right;
				}
			`
		]
	}

	render() {
		return html`
			<div class="order-item" @click="${this.handleClick}">
				<div class="left">
					<h3>${this.customer}</h3>
					<p class="order-status">${this.status}</p>
				</div>
				<div class="right">
					<h3 class="id">${this.orderId}</h3>
					<p class="time">
						${new Date(this.created)
							.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit'})}
					</p>
				</div>
			</div>
		`
	}

	/*
	 * Handles the "accordian" functionality to show the <weave-order-detail>
	 * Note: This doesn't do any of the Accessibility functionality that
	 * 			 I'd be sure to do with more time
	 */
	handleClick(e) {
		e.target.classList.toggle("active"); // toggles active styles

		// get the detail element to open or close it
		// because of the shadow DOM, can't use document.querySelector()
		const detailEl = this.shadowRoot.host.nextElementSibling;
		if (detailEl.style.maxHeight){
      detailEl.style.maxHeight = null;
    } else {
      detailEl.style.maxHeight = detailEl.scrollHeight + "px";
    }
	};
});
