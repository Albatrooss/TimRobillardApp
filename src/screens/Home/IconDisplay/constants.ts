const SEGMENT_LENGTH = 4;
export const INPUT_RANGE = [...new Array(10 * SEGMENT_LENGTH + 1)].map((_, i) => i);
const INPUT_LENGTH = INPUT_RANGE.length;

type Rotation = '0deg' | '180deg' | '360deg';
interface AnimationData {
  X: Rotation[];
  Y: Rotation[];
  Z?: Rotation[];
}

export const ANIMATION_DATA = [...new Array(10)].reduce<AnimationData[]>(
  (acc, _, cv) => {
    const res: AnimationData = {
      X: [],
      Y: [],
    };
    if (cv === 0) {
      res.X = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < INPUT_LENGTH - 1 ? '0deg' : '180deg',
      );
      res.Y = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < SEGMENT_LENGTH ? '0deg' : '180deg',
      );
      res.Z = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < 7 ? '0deg' : '180deg',
      );
    } else if (cv % 2) {
      // rotating in
      res.X = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i >= (cv + 1) * SEGMENT_LENGTH ? '180deg' : '0deg',
      );
      res.Y = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < SEGMENT_LENGTH * cv ? '180deg' : '360deg',
      );
    } else {
      // flipping in
      console.log('flip', cv);
      res.X = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < cv * SEGMENT_LENGTH ? '180deg' : '0deg',
      );
      res.Y = [...new Array(INPUT_LENGTH)].map((_, i) =>
        i < (cv + 1) * 4 ? '0deg' : '180deg',
      );
    }
    acc.push(res);
    return acc;
  },
  [],
);