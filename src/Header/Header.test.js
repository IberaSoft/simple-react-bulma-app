import React from 'react'
import Header from './Header'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Header component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Header />);
        expect(result).toMatchSnapshot();
    });
})