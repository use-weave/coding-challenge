import { LitElement, css, html } from 'lit-element';

// import marker from './marker-15.svg';

window.customElements.define('mapbox-map', class extends LitElement {
	constructor() {
		super();
		this._maps = 'hello world';
	}

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

	    // console.log('map', this._map, this);

	    this.loadIcons();
	    // this._map.on('load', function() {
	    	// console.log('hello!', () => this._map, this);
	    // })
    }, 3);
  };

  disconnectedCallback() {
  	console.log('Mapbox Map disconnected');
    this._map.remove()
  };

  loadIcons() {
  	const map = this._map;

  	/*
		 * Markers below are just mock ups.
		 * In production, you'd need the coordinates of each address
		 * Getting those coordinates is simple with the Mapbox API
		 * Then, save the coords in the Redux store
		 * Loop through the coords and add markers for each one
  	 */

  	var markerOne = new mapboxgl.Marker()
		  .setLngLat([-105.2705, 40.0150])
		  .addTo(map);

	  var markerTwo = new mapboxgl.Marker()
		  .setLngLat([-105.2805, 40.0250])
		  .addTo(map);

		var markerThree = new mapboxgl.Marker()
		  .setLngLat([-105.2605, 40.0175])
		  .addTo(map);
  }
});
