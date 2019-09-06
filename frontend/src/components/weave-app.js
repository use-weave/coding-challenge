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

                /* Wide layout: when the viewport width is bigger than 460px, layout
                changes to a wide layout */
                @media (min-width: 460px) {
                  :host {
                    display: grid;
                    grid-template-areas:  "head"
                                          "main"
                                          "foot";
                    grid-template-rows: 3rem 1fr 2rem;
                    height: 100%;
                    max-height: 100vh;
                    width: 100%;
                  }
                }

                footer {
                    align-items: center;
                    background-color: rgba(0,0,0,0.2);
                    color: rgba(0,0,0,0.6);
                    display: flex;
                    grid-area: foot;
                    justify-content: center;
                    text-align: center;
                }

                header {
                    align-items: center;
                    background-color: white;
                    box-shadow: var(--box-shadow);
                    color: white;
                    display: flex;
                    grid-area: head;
                    /* height: 56px; */
                    justify-content: space-between;
                    padding: 0 16px;
                    z-index: 1;
                }

                h1 {
                    padding: 0;
                    margin: 0;
                    font-size: 21px;
                    color: var(--primary-color);
                }

                main {
                    grid-area: main;
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
                <p>&copy; 2019</p>
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