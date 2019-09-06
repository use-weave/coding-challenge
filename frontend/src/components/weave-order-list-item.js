import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-order-list-item', class extends LitElement {
	static get properties() {
		return {
			created: String,
			customer: String,
			order_id: String,
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

				input {
					cursor: pointer;
					margin-left: 1rem;
					width: 1.5rem;
				}

				.order-item {
					display: flex;
				}

				.order-item.active {
					background-color: rgba(0,0,0,0.05);
					box-shadow: var(--box-shadow);
					z-index: 1;
				}

				.order-item:hover {
					background: rgba(0, 0, 0, 0.1);
				}

				.time {
					text-align: right;
				}

				.toggle-wrapper {
					align-items: center;
					cursor: pointer;
					display: flex;
					justify-content: space-between;
					padding: 0.5rem 1rem;
					width: 100%;
				}
			`
		]
	}

	render() {
		return html`
			<div class="order-item">
				${this.status === 'Filled'
					? html`
							<input
								type="checkbox"
								@click="${this.toggleSelected}"
							>
						`
					: html`<div style="width: 45px;"></div>`
				}
				<div class="toggle-wrapper" @click="${this.toggleDetailPanel}">
					<div class="left">
						<h3>${this.customer}</h3>
						<p class="order-status">${this.status}</p>
					</div>

					<div class="right">
						<h3 class="id">${this.order_id}</h3>
						<p class="time">
							${new Date(this.created)
								.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit'})}
						</p>
					</div>
				</div>
			</div>
		`
	}

	/*
	 * Handles the "accordian" functionality to show the <weave-order-detail>
	 * Note: This doesn't do any of the Accessibility functionality that
	 * 			 I'd be sure to implement with more time
	 */
	toggleDetailPanel(e) {
		// toggles active styles
		this.shadowRoot.querySelector('.order-item').classList.toggle("active");

		// get the detail element
		// because of the shadow DOM, can't use document.querySelector()
		const detailEl = this.shadowRoot.host.nextElementSibling;
		// Open or close the "accordian" by manipulating max-height
		if (detailEl.style.maxHeight){
      detailEl.style.maxHeight = null;
    } else {
      detailEl.style.maxHeight = detailEl.scrollHeight + "px";

      /* TODO: figure how to elegantly scroll to opened item */
      // window.scrollBy(0, detailEl.scrollHeight);
    }
	};

	toggleSelected(e) {
		this.dispatchEvent(new CustomEvent(
			// e.target.checked is the state after the click
			`${e.target.checked ? 'order-selected' : 'order-unselected'}`,
			{ detail: { order_id: this.order_id } }
    ));
	};
});
