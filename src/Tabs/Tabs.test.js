import React from 'react'
import Tabs from './Tabs'
import ShallowRenderer from 'react-test-renderer/shallow';
import { dataItems } from './data';

describe('Tabs component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Tabs tabsItems={dataItems} />);
        expect(result).toMatchSnapshot();
    });
})