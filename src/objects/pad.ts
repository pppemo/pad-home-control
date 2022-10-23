import { Widget } from './widget';
import { Dictionary } from './dictionary';

export type Pad = {
  id: string;
  widgets: Widget[];
  properties: Dictionary<string>;
};
