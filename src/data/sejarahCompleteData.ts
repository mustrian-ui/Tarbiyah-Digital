import { SEJARAH_PART1, SejarahListItem, SejarahTopic } from "./sejarahPart1";
import { SEJARAH_PART2 } from "./sejarahPart2";

export type { SejarahListItem, SejarahTopic };

export const SEJARAH_ISLAM_COMPLETE_DATA: SejarahTopic[] = [
  ...SEJARAH_PART1,
  ...SEJARAH_PART2
];
