import { LitElement, css, html } from "../../node_modules/lit-element/lit-element.js";
window.customElements.define('weave-error404', class extends LitElement {
  render() {
    return html`
            <div>You must have reached this page by accident, because it doesn't exist.</div>
        `;
  }

});