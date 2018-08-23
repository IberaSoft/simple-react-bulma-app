import React, { Component } from 'react';

// Css
import './Accordion.css';

class Accordion extends Component {
    state = {
        activeIndex: 0
    }

    headerClick = (index) => {
        if (index !== this.state.activeIndex) this.setState({ activeIndex: index })
    }

    headerClass = (index) => (this.state.activeIndex === index) ? "is-active" : ""

    render() {
        const { accordionItems } = this.props
        const { activeIndex } = this.state

        return (
            <section className="accordions">
                {
                    accordionItems.map((tab, index) =>
                        <article key={tab.title + index}
                            onClick={() => this.headerClick(index)}
                            className={`accordion is-primary ${this.headerClass(index)}`}>
                            <div className="accordion-header toggle">
                                <p>{tab.title}</p>
                                <button className="toggle" aria-label="toggle"></button>
                            </div>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    {accordionItems[activeIndex].content}
                                </div>
                            </div>
                        </article>
                    )
                }
            </section>
        );
    }
}

export default Accordion;