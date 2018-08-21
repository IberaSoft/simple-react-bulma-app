import React from 'react';

const Main = (props) => (
    <div className="box content">
        <article className="post">
            <p>The active index is: {props.activeIndex}</p>
            <p>The tab index is: {props.activeTab}</p>
        </article>
    </div>
)

export default Main;
