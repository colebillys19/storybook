import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, fireEvent, renderIntoDocument } from '@testing-library/react';
import getElementWithContext from 'react-test-context-provider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

configure({ adapter: new Adapter() });

/**
* @description: Checks the basic rendering of a React component or container
*
* @used for: base_ui and starting point for all other React components
* (including containers)
* @param component {React component}: the unrendered React component
* that you're testing
*/
export const checkBasicRendering = (component) => {
  it('Expect to render', () => {
    const renderedComponent = shallow(component);
    expect(renderedComponent).toBeDefined();
  });
};

/**
* @description: Checks that all required props on a React component
* are present and the correct type
*
* @used for: base_ui and starting point for all other
* React components (including containers)
* @param component {React component}: the unrendered React
* component that you're testing
*/
export const checkRequiredProps = (component) => {
  it('Expect to have all required propTypes', () => {
    const spy = jest.spyOn(global.console, 'error');
    shallow(component);
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();
  });
};

/**
* @description: Checks that any required children
* are present on a React component
*
* @used for: base_ui and starting point for all other
* React components (including containers) that wrap sub-components
* @param component {React component}: the unrendered React component that
* you're testing
* @param expectedChildren {array of objects}: the names and properties
* you're expecting the children to have
* @return {void}
*/
export const checkChildren = (component, expectedChildren) => {
  const renderedComponent = shallow(component);
  const renderedChildren = renderedComponent.props().children;

  describe('Children should render', () => {
    it('Expect rendered component to have children defined', () => {
      expect(renderedChildren).toBeDefined();
    });

    it('Expect rendered children to match unrendered children', () => {
      const unrenderedChildren = component.props.children;
      expect(renderedChildren).toEqual(unrenderedChildren);
    });
  });


  describe('Children should render the correct props in the correct order',
    () => {
      const children = Array
        .isArray(renderedChildren) ? renderedChildren : [renderedChildren];

      children.forEach((child, index) => {
        it('Expect child prop to render in the correct order', () => {
          expect(child.type.name).toEqual(expectedChildren[index].name);
        });

        it('Expect child to contain certain props', () => {
          expect(child.props).toMatchObject(expectedChildren[index].props);
        });
      });
    });
};

/**
* @description: Checks that a simple required child is
* present on a React component
*
* @used for: base_ui and starting point for all other
* React components (including containers)
* that wrap strings (like <H1>)
* @param component {React component}: the unrendered React component that
* you're testing
* @param expectedChild {string}: the child you're expecting to be passed in
* @return {void}
*/
export const checkSimpleChild = (component, expectedChild) => {
  const { children } = component.props;

  const renderedComponent = shallow(component);
  const renderedChildren = renderedComponent.props().children;

  it('Expect rendered component to have children defined', () => {
    expect(renderedChildren).toBeDefined();
  });

  it('Expect rendered children to match unrendered children', () => {
    expect(renderedChildren).toEqual(children);
  });

  it('Expect rendered children to be the same as the expected string', () => {
    expect(renderedChildren).toEqual(expectedChild);
  });
};

/**
* @description: Checks that a component's return value contains a
* specific subcomponent (with props)
*
* @used for: testing the rendering of a specific subtree within a
* component's return value
* @param component {React element}: the unrendered React element that
* you're testing
* @param subComponent {React element}: the subComponent you expect
* to be included
* @return {void}
*/
export const checkContainsSubComponent = (component, subComponent) => {
  expect(shallow(component).contains(subComponent)).toBe(true);
};

/**
 * @description: Checks that a component's event handler was triggered
 *
 * @used for: components that have an event handler
 * @param component {React element}: the component that you're testing
 * @param eventType {string}: the event handler type we want to check for
 * @param handler {function}: the Jest function that you want to make sure
 * was triggered
 * @param expectedInput {any}: what we expect the onClick handler to be
 * called with
 * @return {void}
 */
export const checkEventHandler = (
  component,
  eventType,
  handler,
  expectedInput
) => {
  it(`Should trigger handler function when ${eventType} event is triggered`,
    () => {
      shallow(component).simulate(eventType);
      expect(handler).toHaveBeenCalledTimes(1);
    });

  if (expectedInput) {
    it(`Event handler should have been called with ${expectedInput} input`,
      () => {
        expect(handler).toHaveBeenCalledWith(expectedInput);
      });
  }
};

/**
 * @description: a helper function to do the context and props decorating,
 * then rendering of components
 *
 * @used for: testing helpers that actually want to render the component
 * into the document (rather than just shallow rendering from Enzyme)
 * @param Component {React component class}: the component that
 * you want to render
 * @param fn {Function}: the mocked out function that you're testing
 * @param options {object}: destructures into functionName, propsToPassDown,
 * & addContext: @sub-param functionName {string}: the prop name of the
 * mocked handler function we're checking (default of 'onClick')
 * @sub-param propsToPassDown {object}: all props that are required
 * for the component to render
 * @sub-param addContext {object}: any additional context
 * that's required for the component to render
 * @return {object}: React element in utility wrapper that allows
 * all the 'react-testing-library' utility functions
 */
// export const renderingHelper = (
//   Component,
//   fn,
//   { functionName = 'onClick', propsToPassDown, addContext }
// ) => {
//   const propsToAdd = Object.assign({}, propsToPassDown);
//   propsToAdd[functionName] = fn;

//   // add Mui Theme info (required to render Mui components)
//   const muiTheme = getMuiTheme();
//   const context = Object.assign({ muiTheme }, addContext);

//   // create & render component with all necessary context
//   const component = getElementWithContext(
//     context,
//     <Component {...propsToAdd} />
//   );
//   return renderIntoDocument(component);
// };

/**
 * @description: Checks that when a specific child of a component is clicked
 * that the click handler registers the correct number of clicks
 *
 * @used for: components with children that can be clicked
 * @param Component {React component class}: the component whose onClick
 * handler you want to trigger/check on a child
 * @param buttonName {string}: the text identifying what should be clicked
 * @param options {object}: object with handlerName {string} (the prop name of
 * the mocked handler function we're checking, not required because defaults
 * to 'onClick'), propsToPassDown {object} (all props that are required for
 * the component to render), expectedInput {any} (what we expect the onClick
 * handler to be called with, if anything), & addContext {object} (any
 * additional context that's required for the component to render)
 * @return {void}
 */
export const checkChildClickHandler = (Component, buttonName, options = {}) => {
  const { expectedInput } = options;

  // mock out the function we're testing
  const handler = jest.fn();

  // create component & render
  const { getByText } = renderingHelper(Component, handler, options);

  afterAll(cleanup);
  /* eslint-disable-next-line max-len */
  it(`Should not register a click event if the child with ${buttonName} text is not clicked`,
    () => {
      expect(handler).not.toHaveBeenCalled();
    });
  /* eslint-disable-next-line max-len */
  it(`Should register a click event when the child with ${buttonName} text is clicked`,
    () => {
      fireEvent.click(getByText(buttonName));
      expect(handler).toHaveBeenCalledTimes(1);
    });

  if (expectedInput) {
    it(`Event handler should have been called with ${expectedInput} input`,
      () => {
        expect(handler).toHaveBeenCalledWith(expectedInput);
      });
  }
  /* eslint-disable-next-line max-len */
  it(`Should register a second click event when the child with ${buttonName} text is clicked again`,
    () => {
      fireEvent.click(getByText(buttonName));
      expect(handler).toHaveBeenCalledTimes(2);
    });
};

/**
 * @description: checks to make sure that a component correctly mounts by
 * checking whether any function calls within mounting lifecycle methods occur
 * (componentDidMount, componentWillMount, etc.)
 *
 * @used for: components with lifecycle methods that call a function
 * that's been passed in as a prop inside
 * @param Component {React component class}: the component whose
 * mounting lifecycle you want to check
 * @param functionName {string}: the prop name of the function we're checking
 * @param options {object}: object with handlerName {string} (the prop nameof
 * the mocked handler function we're checking, defaults to 'onClick' & required
 * if testing expectedInput), propsToPassDown {object} (all props that are
 * required for the component to render), expectedInput {any} (what we expect
 * the onClick handler to be called with, if anything), & addContext {object}
 * (any additional context that's required for the component to render)
 * @return {void}
 */
export const checkComponentMounting = (Component, options) => {
  const { expectedInput, functionName } = options;

  // mock out the function we're checking
  const fn = jest.fn();

  // create component & render
  renderingHelper(Component, fn, options);

  afterAll(cleanup);

  it('Should trigger the mounting lifecycle events exactly once', () => {
    expect(fn).toHaveBeenCalledTimes(1);
  });

  if (expectedInput) {
  /* eslint-disable-next-line max-len */
    it(`Prop ${functionName} should have been called with ${expectedInput} input`,
      () => {
        expect(fn).toHaveBeenCalledWith(expectedInput);
      });
  }
};
