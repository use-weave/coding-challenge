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
                }

                header {
                    background-color: var(--primary-color, #007A71);
                    height: 56px;
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                main {
                    background-color: white;
                    color: var(--text-color, #4b5255);
                }
                h1 {
                    padding: 0;
                    margin: 0;
                    font-size: 21px;
                    color: white;
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
                <weave-driver-assignments class="page" ?active="${this._page == 'home'}"></weave-driver-assignments>
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