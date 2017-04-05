jest.dontMock('../Row');

describe('Row', () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react-dom/lib/ReactTestUtils');
  const Row = require('../Row');

  it('Should add "row" class', () => {
    const row = TestUtils.renderIntoDocument(<Row />);
    expect(ReactDOM.findDOMNode(row).className).toEqual('row');
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const row = TestUtils.renderIntoDocument(<Row reverse={true} />);
    expect(ReactDOM.findDOMNode(row).className).toContain('reverse');
  });

  it('Should not replace class', () => {
    const row = TestUtils.renderIntoDocument(<Row className="foo" />);
    const className = ReactDOM.findDOMNode(row).className;
    expect(className).toContain('foo');
    expect(className).toContain('row');
  });

  it('Should add modificators', () => {
    const row = TestUtils.renderIntoDocument(
      <Row
        start="xs"
        center="sm"
        end="md"
        top="lg"
        middle="xs"
        bottom="sm"
        around="md"
        between="lg"
      />
    );
    const className = ReactDOM.findDOMNode(row).className;

    expect(className).toContain('row');
    expect(className).toContain('start-xs');
    expect(className).toContain('center-sm');
    expect(className).toContain('end-md');
    expect(className).toContain('top-lg');
    expect(className).toContain('middle-xs');
    expect(className).toContain('bottom-sm');
    expect(className).toContain('around-md');
    expect(className).toContain('between-lg');
  });
});
