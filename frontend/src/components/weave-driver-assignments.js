import { LitElement, css, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// Lazy Loading Reducers
import assignments from '../reducers/assignments.js';
import drivers from '../reducers/drivers.js';
import orders from '../reducers/orders.js';
store.addReducers({
    assignments,
    drivers,
    orders,
});

import './weave-driver.js';
import { setStatus } from '../actions/drivers.js';
import { createAssignment, cancelAssignment } from '../actions/assignments.js';
import { setOrderStatus } from '../actions/orders.js';

window.customElements.define('weave-driver-assignments', class extends connect(store)(LitElement) {

    static get properties() {
        return {
            _orders: Array,
            _drivers: Array,
            _assignments: Object,
            _assignedOrder: String,
            _assignedDriver: String,
            _stagedOrderCancel: String,
            _stagedDriverCancel: String,
            _formattedDate: String,
        }
    }
    static get styles() {
        return [
            SharedStyles,
            css`
                * {
                    box-sizing: border-box;
                }
                #bodyStyle {                    
                    color: #4b5255;
                    display: flex;
                    justify-content: space-around;
                }
                :host {
                    padding: 8px 16px;
                }
                #left-div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 15%;
                }
                #middle-div, #right-div {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-self: flex-start;
                    width: 15%;
                }
                .outer-section {
                    display: flex;
                    justify-content:space-between;
                    flex-direction: column;
                }
                .headerBar {
                }
                .order-ids, button, .assignedOrders  {
                    color: var(--primary-color);
                    border-radius: 5px;
                    padding: 10px 0px;;
                    margin: 5%;
                    box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 6px, rgba(0, 0, 0, 0.22) 0px 1px 4px;
                    width: 90%
                }
                .order-ids:hover, button:hover, .assignedOrders:hover {
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 10px, rgba(0, 0, 0, 0.28) 0px 3px 10px;
                }
                .inactiveDrivers {
                    -webkit-animation: color_change_red 2s 1 normal;
                    border-radius: 5px;
                    margin: 5%;
                    order: 2;
                }
                .assignedDrivers, .assigningOrders {
                    -webkit-animation: color_change_green 2s 1 normal;
                    border-radius: 5px;
                    margin: 5% 0;
                    order: 1;
                    width: 100%;
                }
                .assignedOrders {
                    border-radius: 5px;
                    margin: 5%;
                    order: 1;
                    width: 90%;
                }
                .assignedOrders:hover {
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 10px, rgba(0, 0, 0, 0.28) 0px 3px 10px;
                }
                .finishButtons {
                    display: flex;
                }
                #orderSelect, #confirmation {
                    width: 100%;
                }
                @-webkit-keyframes color_change_red {
                    0% { background-color: white; }
                    50% { background-color: red; }
                    100% { background-color: white; }
                }
                @-webkit-keyframes color_change_green {
                    0% { background-color: white; }
                    50% { background-color: #24ABA1; }
                    100% { background-color: white; }
                }
                .currentOrder {
                    order: 2;
                }
                weave-driver {
                    overflow: hidden;
                }
                .selectedDriver, .selectedOrder {
                    display: none;
                }
                .orderDetail {
                    padding-left: 0px;
                }
                ul {
                    font-size: small;
                    color: #869094;
                }
                }
            `,
        ];
    }
    
    render() {
        return html`
            <div id="bodyStyle">
                <div id="left-div">
                    <h2 class="headerBar">Available</h2>
                    <section class="outer-section">
                        <h3>Orders</h3>
                        ${this._orders.map(order => order.status == 'active' ? html`
                            <input class="order-ids" type="button" value="${order.id}" @click="${e => this.setOrderStatus('assigned', e)}"></input>
                        ` : html`<h3 class="assigningOrders">
                        Order Assigned 
                        <input  class="assignedOrders" type="button" value="${order.id}" @click="${e => this.setOrderStatus('active', e)}}">
                            <ul class="orderDetail" style="list-style-type:none;">Order Detail:
                                <li>ID: ${order.id}</li>
                                <li>Customer: ${order.customer}</li>
                                <li>Items: ${order.items}</li>
                                <li>Total: ${order.total}</li>
                                <li>Ordered: ${order.created}</li>
                                <li>Address: ${order.address_street}, ${order.address_city}, ${order.address_state}, ${order.address_zip}</li>
                            </ul>
                        </input>
                        </h3>` 
                        )}
                    </section>
                    
                    <section class="outer-section">
                        <h3>Drivers</h3>

                        ${this._drivers.map(driver => driver.status === 'active' ? html`
                            <weave-driver
                                name="${driver.name}" class="activeDriver" @click="${e=> this.setStatus('assigned', e)}"></weave-driver>
                        ` : driver.status === 'assigned' ? html`<h3 class="assignedDrivers">
                            Driver Assigned
                            <weave-driver name="${driver.name}" @click="${e=> this.setStatus('active', e)}"></weave-driver>
                        </h3>
                        ` : html`<h3 class="inactiveDrivers">
                        Driver Inactive
                        <weave-driver name="${driver.name}"></weave-driver>
                        </h3>
                        `)}
                        

                    </section>
                </div>
                
                <div id="middle-div">
                    <h2 class="headerBar">Confirmation</h2>
                    <div class="box">
                        <button id="confirmation" @click="${this.updateAssignment}">Confirm Order and Driver</button>
                    </div>
                </div>
                
                <div id="right-div">
                    <h2 class="headerBar">Assignments</h2>

                    <div class="finishButtons">
                    <button @click="${e=> this.removeAssignment(e, 'complete')}">Complete</button>
                    <button @click="${e=> this.removeAssignment(e, 'cancel')}">Cancel</button>
                    </div><br>
                    ${store.getState().assignments.map(assignment => assignment ?
                        html`<button class="cancelOrder" id="${assignment.order}" value="${assignment.driver}" @click="${e=>this.stageCancel(e, assignment)}">
                        ${assignment.driver}: ${assignment.order}
                    </button>
                    `: html`<br>`)}
                </div>
            </div>
        `;
    }
    //stageCancel(): sets local variables to be used in removeAssignment()
    stageCancel(e, assignment) {
        this._stagedOrderCancel = assignment.order;
        this._stagedDriverCancel = assignment.driver;
    }
    //removeAssignment(): updates state in 2 ways depending on a given input. On input from the cancel
    //button, order and driver status returns to active. On complete, driver status becomes active, order
    //gets dropped from the screen. I had trouble removing the completed order entry from the state the same
    //way I could with assignments, so this solution is not ideal, really only visual.
    removeAssignment(e, whichButton) {
        var driverKey = this._stagedDriverCancel;
        var orderKey = this._stagedOrderCancel;
        if (this._stagedOrderCancel && this._stagedDriverCancel) {
            if (whichButton == 'cancel'){
                if (confirm("Select OK to cancel assignment.")) {
                    store.dispatch(cancelAssignment(driverKey));
                    store.dispatch(setStatus(driverKey, 'active'));
                    store.dispatch(setOrderStatus(orderKey, 'active'));
                    delete this._assignments[driverKey];
                }
            } else if (whichButton == 'complete') {
                if (confirm("Select OK to confirm assignment complete.")){
                    store.dispatch(cancelAssignment(driverKey));
                    store.dispatch(setStatus(driverKey, 'active'));
                    store.dispatch(setOrderStatus(orderKey, 'complete'));
                }
            }
        }
        this._stagedOrderCancel = '';
        this._stagedDriverCancel = '';
    }
    //setOrderStatus(): sets order status with conditions that do not allow for multiple driver selections at once
    setStatus(status, e) {
        if(!this.shadowRoot.querySelector('.assignedDrivers')){
            this._assignedDriver = e.target.name;
            store.dispatch(setStatus(e.target.name, status));
        }
        else if (e.target.parentNode.className === 'assignedDrivers') {
            this._assignedDriver = '';
            store.dispatch(setStatus(e.target.name, 'active'));
        }
    }
    //setOrderStatus(): sets order status with conditions that do not allow for multiple order selections at once
    setOrderStatus(status, e) {
        if(!this.shadowRoot.querySelector('.assigningOrders') || e.target.className === 'assignedOrders'){
            this._assignedOrder = e.target.value;
            store.dispatch(setOrderStatus(e.target.value, status));
        }
    }
    //updateAssignment(): updates the assignment based on the user confirming the selection of driver and order
    //updates classNames and local variables to effect visibility
    updateAssignment() {
        if (this._assignedDriver && this._assignedOrder) {
            if (confirm("Select OK to confirm assignment.")) {
                store.dispatch(createAssignment(this._assignedDriver, this._assignedOrder));
                store.dispatch(setStatus(this._assignedDriver, 'assigned'));
                this._assignments[this._assignedDriver] = this._assignedOrder;
                var newDriver = this.shadowRoot.querySelector('.assignedDrivers');
                newDriver.className = 'selectedDriver';
                var newOrder = this.shadowRoot.querySelector('.assigningOrders');
                newOrder.className = 'selectedOrder';
                this._assignedDriver = '';
                this._assignedOrder = '';
            }
        }   
    }

    stateChanged(state) {
        this._orders = state.orders;
        this._drivers = state.drivers;
        this._assignments = state.assignments;
    }
});