import store from 'store2';
import type { System } from '../objects/system';
import type { Pad } from '../objects/pad';
import { Recognizable } from '../objects/recognizable';

enum ConfigKeys {
  SYSTEMS = 'systems',
  PADS = 'pads',
}

abstract class LocalAppConfigSlice<R> {
  protected configKey: ConfigKeys;

  constructor(configKey: ConfigKeys) {
    this.configKey = configKey;
  }

  public get(): R {
    return store.get(this.configKey);
  }

  public set(config: R) {
    return store.set(this.configKey, config);
  }
}

class LocalAppConfigSliceMap<R> extends LocalAppConfigSlice<R> {
  public setProperty(key: keyof R, value: string) {
    const currentConfig = this.get();
    const newConfig = {
      ...currentConfig,
      [key]: value,
    };
    this.set(newConfig);
  }
}

class LocalAppConfigSliceArray<R> extends LocalAppConfigSlice<Array<R>> {
  public push(item: R) {
    const currentElements = this.get();
    const newConfig = [...currentElements, item];
    this.set(newConfig);
  }
}

export const useLocalAppConfig = () => {
  const systems = new LocalAppConfigSliceArray<System>(ConfigKeys.SYSTEMS);
  const pads = new LocalAppConfigSliceArray<Pad>(ConfigKeys.PADS);
  return { systems, pads };
};
