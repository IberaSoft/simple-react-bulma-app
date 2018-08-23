import React from 'react';

// Css
import './Accordion.css';

const AccordionItem = ({ title, children, isActive , clickHeader }) =>  {
        let className = "accordion is-primary"

        if (isActive) className = `${className} is-active`

        return (
            <article className={className}>

                <div className="accordion-header toggle" onClick={clickHeader}>
                    <p>{title}</p>
                    <button className="toggle" aria-label="toggle"></button>
                </div>

                { isActive && 
                    <div className="accordion-body">
                        <div className="accordion-content">
                            {children}
                        </div>
                    </div>
                }

            </article>
        );
}

export default AccordionItem;