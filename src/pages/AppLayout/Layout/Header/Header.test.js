import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import classes from './Header.module.scss';
import Navigation from '../../../../components/Navigation/Navigation';

describe('<Header />', () => {
    let wrapper;

    const props = {
        title: "Vendor Management Tool",
        renderContentsOnRight: () => (
            <div>Hey</div>
        )
    };

    beforeEach(() => {
        wrapper = shallow(<Header {...props} /> );
    });

    it('should render <Header /> component', () => {
        expect(wrapper.exists(`header.${classes.Header}`)).toBe(true);
        expect(wrapper.exists(`div.${classes.Title}`)).toBe(true);
        expect(wrapper.find(Navigation)).toHaveLength(1);
    });
});

