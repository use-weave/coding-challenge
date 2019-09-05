import { LitElement, html, css } from 'lit-element';

import { ResetStyles, SharedStyles } from './shared-styles.js';

window.customElements.define('weave-driver-list-item', class extends LitElement {

    static get properties() {
        return {
            name: String,
            orderCount: Number,
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
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                }

                .driver-item:hover {
                    background: rgba(0, 0, 0, 0.1);
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
            <div class="driver-item">
                <div>
                    <h3>${this.name}</h3>
                    <p>${this.status}</p>
                </div>
                ${this.status === 'active' ?
                    html`
                        <div class="queued">
                            <p class="queued-count">${this.orderCount}</p>
                            <p class="queued-label">QUEUED</p>
                        </div>
                    `
                    : null
                }
                
            </div>
        `;
    }
});