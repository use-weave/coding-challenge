import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-driver-list-item', class extends LitElement {

    static get properties() {
        return {
            driver_id: String,
            name: String,
            order_count: Number,
            orders_selected: Number,
            status: String,
        };
    }

    static get styles() {
        return [
            ResetStyles,
            SharedStyles,
            css`
                .driver-item {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                }

                .driver-item:hover {
                    background: rgba(0, 0, 0, 0.1);
                }

                .driver-item.active {
                    background-color: rgba(0,0,0,0.05);
                    box-shadow: var(--box-shadow);
                    z-index: 1;
                }

                .queued {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .queued-count {
                    font-size: 1.5rem;
                    margin: 0;
                }

                .queued-label {
                    font-size: 0.75rem;
                    margin: 0;
                }
            `,
        ];
    }

    render() {
        return html`
            <div class="driver-item" @click="${this.toggleDetailPanel}">
                <div>
                    <h3>${this.name}</h3>
                    <p>${this.status}</p>
                </div>
                ${this.status === 'active' ?
                    html`
                        ${this.orders_selected > 0 ? 
                            html`
                                <button @click="${this.assign_orders}" type="button">
                                    Assign ${this.orders_selected}
                                </button>
                            `
                            : null
                        }
                        <div class="queued">
                            <p class="queued-count">${this.order_count}</p>
                            <p class="queued-label">QUEUED</p>
                        </div>
                    `
                    : null
                }
                
            </div>
        `;
    }

    /*
     * Handles the "accordian" functionality to show the <weave-order-detail>
     * Note: This doesn't have any of the Accessibility functionality that
     *       I'd be sure to implement with more time
     */
    toggleDetailPanel(e) {
        e.target.classList.toggle("active"); // toggles active styles
        
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

    assign_orders(e) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent(
            'assign-orders',
            { detail: { driver_id: this.driver_id }}
        ))
    }
});