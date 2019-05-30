const unified = require('unified');
const english = require('retext-english');
const sentiment = require('retext-sentiment');

function getSentiment(text) {
  const processor = unified()
    .use(english)
    .use(sentiment);

  const tree = processor.parse(text);
  processor.run(tree, text);

  const { data } = tree;

  /*  Returns something like this
    with children: containing nodes for paragraphs
    and sentences within the text.  We only need the overall
    sentiment for the text.
  2019-05-30T16: 03: 01.014Z info: {
    "type": "RootNode",
    "children": [...],
    "position": {
      "start": {
        "line": 1,
        "column": 1,
        "offset": 0
      },
      "end": {
        "line": 1,
        "column": 330,
        "offset": 329
      }
    },
    "data": {
      "polarity": 2,
      "valence": "positive"
    }
  }
  */
  return data && data.polarity || 0;
}

exports.getSentiment = getSentiment;