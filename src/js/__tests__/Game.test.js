import Game from '../Game';

test('test', () => {
  const test = new Game(2);
  expect(test.fieldSize).toEqual(2);
});
