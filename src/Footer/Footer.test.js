import React from 'react'
import Footer from './Footer'
import renderer from 'react-test-renderer';

describe('Footer component', () => {
    it('Should match the snapshot', () => {
        const wrapper = renderer
            .create(<Footer />)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})