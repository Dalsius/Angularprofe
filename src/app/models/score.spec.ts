import { Score } from './score';

describe('Score', () => {
  it('should create an instance', () => {
    expect(new Score(1,'Angular', 7)).toBeTruthy();
  });
});
