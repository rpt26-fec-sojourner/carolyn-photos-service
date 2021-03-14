import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../client/src/components/App';
import PhotoGallery from '../client/src/components/PhotoGallery';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('render snapshot', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('render photo gallery', () => {
  //   const wrapper = mount(<PhotoGallery />);
  //   expect(wrapper.find(PhotoGallery)).toBeDefined();
  // });
});
