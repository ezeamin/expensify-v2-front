import { LanguagesList } from '@constants/languagesList';
import themes from '@constants/themes';

export interface GlobalDataState {
  theme: themes;
  navegationActive: string;
  language: LanguagesList;
}
