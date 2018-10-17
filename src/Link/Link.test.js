import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'; //https://reactjs.org/docs/test-renderer.html

describe('Link component', () => {
    it('Should match the snapshot', () => {
        const wrapper = renderer
            .create(<Link />)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})