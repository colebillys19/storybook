import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

  describe('Children should render the correct props in the correct order', () => {
    const children = Array.isArray(renderedChildren)
      ? renderedChildren
      : [renderedChildren];

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
  it(`Should trigger handler function when ${eventType} event is triggered`, () => {
    shallow(component).simulate(eventType);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  if (expectedInput) {
    it(`Event handler should have been called with ${expectedInput} input`, () => {
      expect(handler).toHaveBeenCalledWith(expectedInput);
    });
  }
};
