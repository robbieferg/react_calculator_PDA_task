import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>);
  });

  it('Should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it("Should be able to add numbers", () => {
    container.find("#number1").simulate("click");
    container.find("#operator-add").simulate("click");
    container.find("#number4").simulate("click");
    container.find("#operator-equals").simulate("click");
    const total = container.find("#running-total");
    expect(total.text()).toEqual("5");
  });
  
  it("Should be able to subtract numbers", () => {
    container.find("#number7").simulate("click");
    container.find("#operator-subtract").simulate("click");
    container.find("#number4").simulate("click");
    container.find("#operator-equals").simulate("click");
    const total = container.find("#running-total");
    expect(total.text()).toEqual("3");
  });



});

