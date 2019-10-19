import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './shared-styles.js';

window.customElements.define('weave-driver', class extends LitElement {

    static get properties() {
        return {
            name: String,
        };
    }

    static get styles() {
        return [
            SharedStyles,
            css`
            #driverName {
                color: var(--primary-color);
                border-radius: 5px;
                padding: 10px 0px;
                margin: 5%;
                box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 6px, rgba(0, 0, 0, 0.22) 0px 1px 4px;
                width: 90%;
            }
            #driverName:hover {
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 10px, rgba(0, 0, 0, 0.28) 0px 3px 10px;
            }
            `,
        ];
    }

    render() {
        return html`
            <div>
                <button id="driverName">${this.name}</button>
            </div>
        `;
    }
});