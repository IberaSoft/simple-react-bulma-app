import React from 'react'
import Navigation from './Navigation';
import ShallowRenderer from 'react-test-renderer/shallow';

const defaultProps = [
    { title: 'Tabs' },
    { title: 'Accordion' },
    { title: 'MyIp' },
    { title: 'Menu 4' },
]

describe('Navigation component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Navigation
                menuItems={defaultProps}
                className="navbar-end"
                activeIndex={0}
                changeIndex={0}
                 />);
        expect(result).toMatchSnapshot();
    });
})