import React from 'react';

const AccordionItemBody = (props) => {
    return (
        <div className="accordion--body">
            <div className="accordion--content">
                {props.children}
            </div>
        </div>
    )
}

export default AccordionItemBody;