import React from 'react';
import colors from '../colors';

const shadesOfOrange = [
  colors.nnLightOrange,
  colors.nnMediumOrange,
  colors.nnDarkOrange,
  colors.nnMediumOrange,
];

// x => false => [] => []
// x => x == 2 => [1, 2, 3] => [[1,2],[3]]
// x => x == 3 => [1, 2, 3] => [[1,2,3]]
const splitAfter = (fn, list) => {
  const result = list.reduce(
    (acc, cur, i) => {
      acc[acc.length - 1].push(cur);

      if (fn(cur, i)) {
        acc.push([]);
      }

      return acc;
    },
    [[]],
  );

  if (result[result.length - 1].length === 0) {
    result.pop();
  }

  return result;
};

export const getWordsPerColor = x => (x > 12 ? 3 : x > 5 ? 2 : 1);

const Colored = ({ children = '' }) => {
  let words = children.split(' ');
  if (words.length === 1 && words[0] === '') words = []; // no text, then make sure it'll return null

  const wordsPerColor = getWordsPerColor(words.length);

  const sentences = splitAfter(x => x.endsWith('.'), words);

  const result = sentences
    .flatMap(sentence =>
      splitAfter((x, i) => (i + 1) % wordsPerColor === 0, sentence).map(
        (group, i) => (
          <span style={{ color: shadesOfOrange[i % shadesOfOrange.length] }}>
            {group.join(' ')}
          </span>
        ),
      ),
    )
    .map((value, i, arr) =>
      i + 1 === arr.length ? <>{value}</> : <>{value} </>,
    ); // add a space between the words

  return result;
};

export default Colored;
