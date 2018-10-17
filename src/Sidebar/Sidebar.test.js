import React from 'react'
import Sidebar from './Sidebar'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Sidebar component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Sidebar />);
        expect(result).toMatchSnapshot();
    });
})