import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem/NavigationItem';

describe('<Navigation />', () => {
    let wrapper;
    const props = {
        activeClassName: "class",
        className: "class",
        itemClassName: "class",
        itemActiveClassName: "class"
   };
    beforeEach(() => {
        wrapper = shallow(<Navigation {...props} />);
    });

    it('should render without throwing an error', () => {
        expect(wrapper.find("nav")).toHaveLength(1);
        expect(wrapper.find(NavigationItem)).toHaveLength(0);
    });

    it('it should not render 2 <NavigationItem />', () => {
        wrapper.setProps({
            items: [{
                link: "link1",
                label: "Link 1"
            }, {
                link: "link2",
                label: "Link 2"
            }]
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});