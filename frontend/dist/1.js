(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{7:function(e,s,t){"use strict";t.r(s);var r=t(0),a=t(3),i=t(2),d=t(4);t(8);const n={};var c=(e=n,s)=>(s.type,e);const o=[{id:"1239213",name:"James Ontiveros",status:"active",vehicle_name:"Camry",vehicle_license:"123-ABC"},{id:"1239214",name:"Dustin Higginbotham",status:"inactive",vehicle_name:"Outback",vehicle_license:"124-XYZ"},{id:"1239215",name:"Zachary Pierce",status:"active",vehicle_name:"Tacoma",vehicle_license:"444-VVV"}];var m=(e=o,s)=>(s.type,e);const v=[{id:"1290312938",customer:"Danny DeVito",items:5,total:10499,created:(new Date).toISOString(),address_street:"123 Test Dr",address_city:"Boulder",address_state:"CO",address_zip:"80303"},{id:"1238124751",customer:"Bob Saget",items:2,total:5527,created:(new Date).toISOString(),address_street:"345 Test Dr",address_city:"Aurora",address_state:"CO",address_zip:"90210"},{id:"1238124756",customer:"Tony Hawk",items:1,total:1657,created:(new Date).toISOString(),address_street:"8819 Test Dr",address_city:"Ft Collins",address_state:"CO",address_zip:"81091"},{id:"1238124757",customer:"T Pain",items:9,total:45412,created:(new Date).toISOString(),address_street:"7182 Test Dr",address_city:"Greeley",address_state:"CO",address_zip:"81920"}];var _=(e=v,s)=>(s.type,e);window.customElements.define("weave-driver",class extends r.a{static get properties(){return{name:String}}static get styles(){return[a.a,r.b`

            `]}render(){return r.c`
            <div>
                <h3>${this.name}</h3>
            </div>
        `}}),i.a.addReducers({assignments:c,drivers:m,orders:_}),window.customElements.define("weave-driver-assignments",class extends(Object(d.a)(i.a)(r.a)){static get properties(){return{_orders:Array,_drivers:Array,_assignments:Object}}static get styles(){return[a.a,r.b`
                :host {
                    padding: 8px 16px;
                }
            `]}render(){return r.c`
            <section>
                <h2>Orders</h2>

                ${this._orders.map(e=>r.c`
                    <div>${e.id}</div>
                `)}

            </section>

            <section>
                <h2>Drivers</h2>

                ${this._drivers.map(e=>r.c`
                    <weave-driver
                        name="${e.name}"></weave-driver>
                `)}

            </section>

            
        `}stateChanged(e){this._orders=e.orders,this._drivers=e.drivers,this._assignments=e.assignments}})},8:function(e,s){}}]);