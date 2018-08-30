import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
    state = {
        activeHeader: 1
    }

    headerClick = (index) => {
        if (index !== this.state.activeHeader) this.setState({ activeHeader: index })
        else this.setState({ activeHeader: -1 })
    }

    render() {
        const { tabsItems } = this.props
        const { activeHeader } = this.state

        return (
            <section>
                {
                    tabsItems.map((acc, index) =>
                        <AccordionItem
                            key={index}
                            title={acc.title}
                            isActive={index === activeHeader}
                            clickHeader={() => this.headerClick(index)}
                            children={acc.content}
                        />
                    )
                }
            </section>
        );
    }
}

export default Accordion;