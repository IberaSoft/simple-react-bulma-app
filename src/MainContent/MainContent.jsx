import React from 'react';
import { IPConsumer } from '../IPContext/IPContext';
import { MenuConsumer } from '../MenuContext/MenuContext';
import Notification from '../Notification/Notification';
import Tabs from '../Tabs/Tabs';
import Sidebar from '../Sidebar/Sidebar';
import Accordion from '../Accordion/Accordion';

const MainContent = ({ menuItems, dataItems }) => (
	<MenuConsumer>
		{(menuContext) => {
            
            const { selectedMenuItems } = menuContext;
            
			return (
                <section className="container">
                    <div className="columns">

                        <div className="column is-3">
                            <Sidebar menuItems={menuItems} />
                        </div>

                        <div className="column is-9">
                            <Notification selectedMenuItems={selectedMenuItems} /> 

                            { selectedMenuItems === 0 && <Tabs tabsItems={dataItems} /> }
                            { selectedMenuItems === 1 && <Accordion accordionItems={dataItems} /> }
                            
                            { selectedMenuItems === 2 && 
                            <IPConsumer>
                                {(context) => (
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-info" type="text" placeholder="Loading input" defaultValue={context.ip} />
                                        </div>
                                    </div>
                                )}
                            </IPConsumer>
                            }
                            
                        </div>
                    </div>
                </section>
			)}
		}
</MenuConsumer>
);

export default MainContent;