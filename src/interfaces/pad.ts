import { Widget } from './widget';
import { Dictionary } from './dictionary';
import { Recognizable } from './recognizable';

export interface Pad extends Recognizable {
  order: number;
  widgets: Widget[];
  properties: Dictionary;
}
