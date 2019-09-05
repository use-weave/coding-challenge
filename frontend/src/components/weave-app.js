import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './shared-styles.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';

import { store } from '../store.js';

import {
    navigate,
} from '../actions/app.js';

window.customElements.define('weave-app', class extends connect(store)(LitElement) {

    static get properties() {
        return {
            _page: String,
        };
    }

    static get styles() {
        return [
            SharedStyles,
            css`
                :host {
                    --primary-color: #0287C3;
                    --secondary-color: #0276aa;
                    --text-color: #4b5255;
                    --text-color-muted: #869094;
                    --placeholder-color: #aaa;
                    --background-color: white;

                    --flower-color: #2B6491;
                    --edible-color: #6C71C1;
                    --concentrate-color: #396DAC;
                    --topical-color: #8D63B4;
                    --merchandise-color: #A7529F;

                    --action-color: #007A71;

                    --exit-red: #CE4047;

                    --box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 6px, rgba(0, 0, 0, 0.22) 0px 1px 4px;
                    --box-shadow-hover: rgba(0, 0, 0, 0.20) 0px 3px 10px, rgba(0, 0, 0, 0.28) 0px 3px 10px;
                }

                header {
                    background-color: white;
                    color: white;
                    height: 56px;
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                h1 {
                    padding: 0;
                    margin: 0;
                    font-size: 21px;
                    color: var(--primary-color);
                }

                .page {
                    display: none;
                }

                .page[active] {
                    display: block;
                }
            `,
        ];
    }

    render() {
        return html`

            <header>
                <h1>Weave</h1>
            </header>

            <main>
                <weave-assign-orders class="page" ?active="${this._page == 'home'}"></weave-assign-orders>
                <weave-error404 class="page" ?active="${this._page == 'error404'}"></weave-error404>
            </main>

            <footer>
                
            </footer>
        `;
    }

    constructor() {
        super();
    }

    firstUpdated() {
        installRouter((location) =>
            store.dispatch(navigate(decodeURIComponent(location.pathname))));
    }

    stateChanged(state) {
        this._page = state.app.page;
    }
});