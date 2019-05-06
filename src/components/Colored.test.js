import React from 'react';
import renderer from 'react-test-renderer';

import Colored, { getWordsPerColor } from './Colored';

describe('getWordsPerColor', () => {
  it('1 word 1 color', () => {
    expect(getWordsPerColor(1)).toBe(1);
  });

  it('5 word 1 color', () => {
    expect(getWordsPerColor(5)).toBe(1);
  });

  it('6 word 2 color', () => {
    expect(getWordsPerColor(6)).toBe(2);
  });

  it('12 word 2 color', () => {
    expect(getWordsPerColor(12)).toBe(2);
  });

  it('13 word 3 color', () => {
    expect(getWordsPerColor(13)).toBe(3);
  });
});

describe('Colored', () => {
  it('renders empty text correctly', () => {
    const tree = renderer.create(<Colored />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a single word correctly', () => {
    const tree = renderer.create(<Colored>one</Colored>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders five words correctly', () => {
    const tree = renderer
      .create(<Colored>one two three four five</Colored>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders six words correctly', () => {
    const tree = renderer
      .create(<Colored>one two three four five six</Colored>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders twelve words correctly', () => {
    const tree = renderer
      .create(
        <Colored>
          one two three four five six seven eight nine ten eleven twelve
        </Colored>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders thirteen words correctly', () => {
    const tree = renderer
      .create(
        <Colored>
          one two three four five six seven eight nine ten eleven twelve
          thirteen
        </Colored>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders two sentences correctly', () => {
    const tree = renderer
      .create(<Colored>sentence one. sentence two</Colored>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
