import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

//css
import './Accordion.css';

class Accordion extends Component {
    static defaultProps = {
        limit: 2,
    }

    state = {
        active: [],
    }

    headerClick = (index) => {

        let  active  = [...this.state.active];
        const positionOfIndex = active.indexOf(index)

        if (positionOfIndex !== -1) {
            active.splice(positionOfIndex, 1)
            this.setState({ active });
            return;
        }
        const { limit } = this.props

        if (active.length >= limit) active.splice(0, limit);
        
        active.push(index);

        this.setState({ active } );
    }

    checkIsActive = (index) => {
        return this.state.active.indexOf(index) >= 0;
    }

    render() {
        const { accordionItems } = this.props

        return (
            <section>
                {
                    accordionItems.map((acc, index) =>
                        <AccordionItem
                            key={index}
                            title={acc.title}
                            isActive={this.checkIsActive(index)}
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