import {
  FOLDER_AUDIO_BGM,
  FOLDER_AUDIO_BGS,
  FOLDER_AUDIO_ME,
  FOLDER_AUDIO_SE,
} from "@sigureya/rpgtypes";

export const AUDIO_FOLDES = [
  FOLDER_AUDIO_BGM,
  FOLDER_AUDIO_BGS,
  FOLDER_AUDIO_ME,
  FOLDER_AUDIO_SE,
] as const satisfies readonly string[];
