import { createMachine } from 'xstate';

type Event =
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'ADD_NEW_SYSTEM' }
  | { type: 'EXIT_ADDING_NEW_SYSTEM'; success: boolean };

export const appMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0BLAdlgLgMQDaADALqKioD2sBWNOVIAHogIwCcXGA7AFZSpACxcAbH3GSRHEQBoQAT0QSMIvgCZpmjpoAcpAMxGuRgL7nFaTDcIB5AAoBRAHIB9ALJuAqmUpIILT0+IzMgewIAuIcGAJ6HPrRAvp8gnyKKggc4voYmkZ62qZcBZoaltboGHYAggAi9e6uzgDq7gDKAJodACrOnv4swQxMLJEcpLGk0nyy2knRHBnKnLn5hZrFPGUClSA2NRAQuFDuOGAA7u6wSrD4YAC2hM4AGgCSve4N9e+uAOLNNqdHr9QYUYZ0UbhUCRcp5ITiGYpASmESaAQrLIGPIaYr6fQicRcSaafaHR5gHAAV3cNFQVMghAAwgAZewdZxeXxDQIjUJjCKIFKaDBJaQmWSCcRGTSZRCaPj5AqyHhEkzCAQiSxWEA4GgQOAsQ64AiQkJhcaIdHyhBqPE6PSGExccnVGzm6FWhAaWKCIwzIxSdF8fRy1Z28TqLSOgzGIz6V26w7IY6nc5XG53B6PT0CmFsRCkW046PacS6OMut2YSk0ukMi4QPOWoUIGPqfSTETxGakQxY1RRh3BgmKgQTmstwWwxAAWhE+ltc5i-FRHFRXFI2gMuR15iAA */
  createMachine({
    tsTypes: {} as import('./App.machine.typegen').Typegen0,
    schema: { events: {} as Event },
    id: 'app',
    initial: 'init',
    states: {
      init: {
        always: {
          target: 'app',
        },
      },
      app: {
        on: {
          OPEN_MENU: {
            target: 'menu_opened',
          },
          ADD_NEW_SYSTEM: {
            target: 'adding_new_system',
          },
        },
      },
      adding_new_system: {
        on: {
          EXIT_ADDING_NEW_SYSTEM: {
            target: 'app',
          },
        },
      },
      menu_opened: {
        on: {
          CLOSE_MENU: {
            target: 'app',
          },
        },
      },
    },
  });
