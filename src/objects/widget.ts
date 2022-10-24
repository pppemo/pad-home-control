import { Dictionary } from './dictionary';
import { Recognizable } from './recognizable';

export enum WIDGET_TYPES {
  SWITCH,
  TRIGGER,
  TURNOFF,
  CLOCK,
  GO_TO_PAGE,
}

export interface Widget extends Recognizable {
  systemId: string;
  type: WIDGET_TYPES;
  label: string;
  properties: Dictionary;
}
