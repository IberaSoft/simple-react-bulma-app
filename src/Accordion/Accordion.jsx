import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

//css
import './Accordion.css';

class Accordion extends Component {
    state = {
        active: []
    }

    headerClick = (index) => {

        let { active } = this.state;

        if (active.indexOf(index) !== -1) {
            this.setState({ active: active.filter(i => i !== index)});
            return;
        }

        if (active.length === 3) {
            active = active.slice(1);
        }

        this.setState({ active: active.concat(index)} );
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