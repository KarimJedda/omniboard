import React from 'react';
import App from './index';

describe('App component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset cache', () => {
    const value = 'testValue';
    localStorage.setItem('test', value);

    expect(localStorage.getAllItems()['test']).toEqual(value);
    wrapper.find('[test-attr="reset-cache-button"]').simulate('click');

    expect(Object.keys(localStorage.getAllItems())).toHaveLength(0);
  });

  it('should show/hide ManageConfigColumns modal', () => {
    wrapper.find('[test-attr="manage-config-columns-button"]').simulate('click');

    expect(wrapper.state().showConfigColumnModal).toBeTruthy();
    wrapper.instance()._handleConfigColumnModalClose();

    expect(wrapper.state().showConfigColumnModal).toBeFalsy();
  });

});