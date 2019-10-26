import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem';

describe('<NavigationItem />', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            children: "Admin Page",
            link: "/admin",
            activeClassName: "class",
            className: "class"
        }
        wrapper = shallow(<NavigationItem {...props} /> );
    });

    it('should render a <NavLink /> component', () => {
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
})

