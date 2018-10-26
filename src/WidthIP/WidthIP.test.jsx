import React from 'react';
import WidthIP from './WidthIP';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('WidthIP component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <WidthIP />);
        expect(result).toMatchSnapshot();
    });
})