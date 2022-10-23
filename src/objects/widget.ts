import { Dictionary } from './dictionary';

export enum WIDGET_TYPES {
  SWITCH,
  TRIGGER,
  TURNOFF,
  CLOCK,
}

export type Widget = {
  id: string;
  systemId: string;
  type: WIDGET_TYPES;
  label: string;
  properties: Dictionary<string>;
};
