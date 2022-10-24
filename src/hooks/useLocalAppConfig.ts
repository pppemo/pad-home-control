import store from 'store2';
import type { System } from '../objects/system';
import type { Pad } from '../objects/pad';
import type { AppSettings } from '../objects/app';

const phcStore = store.namespace('phc.config');

enum ConfigKeys {
  SYSTEMS = 'systems',
  PADS = 'pads',
  APP = 'app',
}

abstract class LocalAppConfigSlice<R> {
  protected configKey: ConfigKeys;

  constructor(configKey: ConfigKeys) {
    this.configKey = configKey;
  }

  public get(): R {
    return phcStore.get(this.configKey);
  }

  public set(config: R) {
    return phcStore.set(this.configKey, config);
  }
}

class LocalAppConfigSliceMap<R> extends LocalAppConfigSlice<R> {
  public setProperty(key: keyof R, value: string | number) {
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
  const app = new LocalAppConfigSliceMap<AppSettings>(ConfigKeys.APP);
  const systems = new LocalAppConfigSliceArray<System>(ConfigKeys.SYSTEMS);
  const pads = new LocalAppConfigSliceArray<Pad>(ConfigKeys.PADS);
  return { systems, pads, app };
};
