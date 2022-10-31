import { Dictionary } from './dictionary';

export interface AppSettings extends Dictionary {
  appVersion: string;
  defaultPadIndex: number;
}
