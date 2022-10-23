import { Dictionary } from "./dictionary";

export enum SYSTEM_TYPES {
    PHILIPS_HUE,
    XIAOMI_AQUARA
}

export type System = {
    id: string;
    type: SYSTEM_TYPES;
    gatewayUrl: string;
    properties: Dictionary<string>;
}