import { LitElement, css, html } from 'lit-element';

window.customElements.define('weave-error404', class extends LitElement {
    render() {
        return html`
            <div>You must have reached this page by accident, because it doesn't exist.</div>
        `;
    }
});