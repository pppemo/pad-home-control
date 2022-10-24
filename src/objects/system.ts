import { Dictionary } from './dictionary';
import { Recognizable } from './recognizable';

export enum SYSTEM_TYPES {
  PHILIPS_HUE,
  XIAOMI_AQUARA,
}

export interface System extends Recognizable {
  type: SYSTEM_TYPES;
  gatewayUrl: string;
  properties: Dictionary;
}
