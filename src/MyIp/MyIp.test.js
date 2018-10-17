import React from 'react';
import MyIp from './MyIp';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('MyIp component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <MyIp />);
        expect(result).toMatchSnapshot();
    });
})