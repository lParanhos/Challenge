import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Layout from './Layout';
import classes from './Header.module.scss';

describe('<Layout />', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            title: "Vendor Management Tool",
            children: "<p>Children</p>"
        };
        wrapper = shallow(<Layout {...props} /> );
    });

    it('should render <Layout /> component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.exists(`main.${classes.Main}`)).toBe(true);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
})

