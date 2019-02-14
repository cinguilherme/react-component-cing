/* eslint-disable no-undef */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';
import { describe, it } from 'mocha';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    context('title property', () => {
        it('should have the tag header when mounted', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('header')).to.have.lengthOf(1);
        });

        it('should have the tag h1 when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.lengthOf(1);
        });

        it('should not have the tag h1 when title not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.lengthOf(0);
        });

        it('should have the tag h1 with title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle property', () => {
        it('should have tag h2 when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="subtitle" />);
            expect(wrapper.find('h2')).to.have.lengthOf(1);
        });
        it('should not have tag h2 when subtitle not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.lengthOf(0);
        });
        it('should have h2 tag with content subtitle', () => {
            const wrapper = shallow(<FullHeader subtitle="subtitle" />);
            expect(wrapper.find('h2').props().children).to.be.equal('subtitle');
        });
    });

    context('bgColor property', () => {
        it('should have bg color default #ccc', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have bg color #000', () => {
            const wrapper = shallow(<FullHeader bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('txtColor property', () => {
        it('should have text color default #fff', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });
        it('should have text color #ddd', () => {
            const wrapper = shallow(<FullHeader textColor="#ddd" />);
            expect(wrapper).to.have.style('color').equal('#ddd');
        });
    });

    context('font property', () => {
        it('should have font family default arial', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('arial');
        });
        it('should have font family sans', () => {
            const wrapper = shallow(<FullHeader font="sans" />);
            expect(wrapper).to.have.style('font-family').equal('sans');
        });
    });

    context('bgImg', () => {
        it('should have background image empty', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });
        it('should have background image equal to bg.jpg', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('vide', () => {
        it('should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.lengthOf(0);
        });
        it('should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video')).to.have.lengthOf(1);
        });
        it('should have video tag with video my_video.mp4', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('my_video.mp4');
        });
    });
});
