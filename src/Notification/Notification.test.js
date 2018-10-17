import React from 'react'
import Notification from './Notification'
import renderer from 'react-test-renderer';

describe('Notification component', () => {
    it('Should match the snapshot', () => {
        const wrapper = renderer
            .create(<Notification />)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})