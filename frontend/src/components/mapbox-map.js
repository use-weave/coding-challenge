import { LitElement, css, html } from 'lit-element';

window.customElements.define('mapbox-map', class extends LitElement {

	static get styles() {
		return [
			css`
				:host {
					grid-area: map;
					position: relative;

				}

				#map {
					bottom:0;
					position: absolute;
					top:0;
					width: 100%;
				}
			`
		]
	};

	render() {
		console.log('render', this.shadowRoot.querySelector('div'))
		return html`
			<head><link href='./src/components/mapbox-gl.css' rel='stylesheet' /></head>
			<div id="map"></div>
		`
	}

	firstUpdated() {
		mapboxgl.accessToken = 'pk.eyJ1IjoiaGlyZWxhbWJkYSIsImEiOiJjanV5NTF1eXQwNWdrM3lvZDZuajFiZXdtIn0.eGBzsCojS_OZoVeAs_8GGQ';
    
    // allow the CSS to take effect before creating the map so it can size itself properly
    setTimeout(() => {
    	this._map = new mapboxgl.Map({
	      container: this.shadowRoot.querySelector('#map'),
	      center: [-105.2705, 40.0150],
	      style: 'mapbox://styles/mapbox/streets-v10',
	      zoom: 13,
	    })
    }, 3);
  };

  disconnectedCallback() {
  	console.log('Mapbox Map disconnected');
    this._map.remove()
  };
});
