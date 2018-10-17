import React from 'react'
import Tabs from './Tabs'
import ShallowRenderer from 'react-test-renderer/shallow';

const defaultTabItems = [{
      title: 'Tab 1',
      content: <p><strong>Content 1</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 2',
      content: <p><strong>Content 2</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 3',
      content: <p><strong>Content 3</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 4',
      content: <p><strong>Content 4</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
  ];

describe('Tabs component', () => {
    it('Should match the snapshot', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Tabs
                tabsItems={defaultTabItems}
                activeIndex={0}
                />);
        expect(result).toMatchSnapshot();
    });
})