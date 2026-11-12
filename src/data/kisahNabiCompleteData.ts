import { PROPHETS_PART1, ProphetStory } from "./kisahNabiPart1";
import { PROPHETS_PART2 } from "./kisahNabiPart2";
import { PROPHETS_PART3 } from "./kisahNabiPart3";

export type { ProphetStory };

export const KISAH_25_NABI_DATA: ProphetStory[] = [
  ...PROPHETS_PART1,
  ...PROPHETS_PART2,
  ...PROPHETS_PART3
];
