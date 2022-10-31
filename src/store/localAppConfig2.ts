import store from 'store2';
import type { AppConfig } from '../interfaces/appConfig';

const phcStore = store.namespace('phc');
const CONFIG = 'config';

export const getLocalAppConfig = (): AppConfig => phcStore.get(CONFIG);

export const setLocalAppConfig = (config: AppConfig) =>
  phcStore.set(CONFIG, config);
