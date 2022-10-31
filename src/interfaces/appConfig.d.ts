import { Pad } from './pad';
import { System } from './system';
import { Widget } from './widget';

export interface AppConfig {
  appVersion: string;
  defaultPadIndex: number;
  pads: Pad[];
  systems: System[];
  widgets: Widget[];
}
