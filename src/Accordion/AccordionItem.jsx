import React from 'react';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemBody from './AccordionItemBody';

const AccordionItem = ({ title, children, isActive, clickHeader }) => {
    let className = "accordion--item accordion--item-primary"

    if (isActive) className = `${className} accordion--item-is-active`

    return (
        <article className={className}>

            <AccordionItemHeader onClick={clickHeader}>
                {title}
            </AccordionItemHeader>

            <AccordionItemBody>
                {children}
            </AccordionItemBody>

        </article>
    );
}

export default AccordionItem;