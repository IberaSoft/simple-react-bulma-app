import React from 'react';

const AccordionItemHeader = (props) => {
    return (
        <div className="accordion--header" onClick={props.onClick}>
            <p>{props.children}</p>
            <button className="button--toggle"></button>
        </div>
    )
}

export default AccordionItemHeader;