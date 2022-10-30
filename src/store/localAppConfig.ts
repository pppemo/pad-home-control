import store from 'store2';
import type { System } from '../interfaces/system';
import type { Pad } from '../interfaces/pad';
import type { AppSettings } from '../interfaces/app';

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

const app = new LocalAppConfigSliceMap<AppSettings>(ConfigKeys.APP);
const systems = new LocalAppConfigSliceArray<System>(ConfigKeys.SYSTEMS);
const pads = new LocalAppConfigSliceArray<Pad>(ConfigKeys.PADS);

export const getLocalAppConfig = () => ({
  app: app.get(),
  systems: systems.get(),
  pads: pads.get(),
});

export const useLocalAppConfig = { systems, pads, app };
