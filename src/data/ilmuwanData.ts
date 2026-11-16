import {
  ILMUWAN_PART1,
  IlmuwanCategory,
  IlmuwanProfile,
  IlmuwanSection,
  IlmuwanWork
} from "./ilmuwanPart1";
import { ILMUWAN_PART2 } from "./ilmuwanPart2";

export type { IlmuwanCategory, IlmuwanProfile, IlmuwanSection, IlmuwanWork };

export const ILMUWAN_CATEGORIES: { id: "semua" | IlmuwanCategory; label: string }[] = [
  { id: "semua", label: "Semua Bidang" },
  { id: "Kedokteran & Biologi", label: "Kedokteran & Biologi" },
  { id: "Matematika & Astronomi", label: "Matematika & Astronomi" },
  { id: "Fisika, Kimia & Teknik", label: "Fisika, Kimia & Teknik" },
  { id: "Filsafat, Sejarah & Geografi", label: "Filsafat, Sejarah & Geografi" }
];

export const ILMUWAN_MUSLIM_DATA: IlmuwanProfile[] = [
  ...ILMUWAN_PART1,
  ...ILMUWAN_PART2
];
