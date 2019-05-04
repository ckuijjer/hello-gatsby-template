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

const Colored = ({ children }) => {
  const words = children.split(' ');
  const wordsPerColor = Math.min(Math.floor(words.length / 6) + 1, 3);

  const sentences = splitAfter(x => x.endsWith('.'), words);

  return sentences
    .flatMap(sentence =>
      splitAfter((x, i) => (i + 1) % wordsPerColor === 0, sentence).map(
        (group, i) => (
          <span style={{ color: shadesOfOrange[i % shadesOfOrange.length] }}>
            {group.join(' ')}
          </span>
        ),
      ),
    )
    .map(x => <>{x} </>);
};

export default Colored;
