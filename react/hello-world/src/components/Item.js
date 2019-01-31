import React from 'react'

export default class Item extends React.Component {

    list() {
        return this.props.items.map(data => {
            return(
                <article key={data.id}>
                  <p>{data.item}</p>
                </article>
              )
        })
    }

    render() {
        return (
            <section className="App">
                {this.list()}
            </section>
        )
    }
}