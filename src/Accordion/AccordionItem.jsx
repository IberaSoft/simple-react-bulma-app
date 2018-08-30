import React from 'react';

//css
import './AccordionItem.css';

const AccordionItem = ({ title, children, isActive, clickHeader }) => {
    let className = "accordion--item accordion--item-primary"

    if (isActive) className = `${className} accordion--item-is-active`

    return (
        <article className={className}>

            <div className="accordion--header" onClick={clickHeader}>
                <p>{title}</p>
                <button className="button--toggle"></button>
            </div>

            <div className="accordion--body">
                <div className="accordion--content">
                    {children}
                </div>
            </div>

        </article>
    );
}

export default AccordionItem;