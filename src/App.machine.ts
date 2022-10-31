import { createMachine, send, assign } from 'xstate';
import { AppConfig } from './interfaces/appConfig';
import { getLocalAppConfig } from './store/localAppConfig2';

type Event =
  | { type: 'START_APP' }
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'ADD_NEW_SYSTEM' }
  | { type: 'ENABLE_SCREEN_BLINDS' }
  | { type: 'DISABLE_SCREEN_BLINDS' }
  | { type: 'OPEN_SETTINGS' }
  | { type: 'CLOSE_SETTINGS' }
  | { type: 'EDIT_WIDGETS' }
  | { type: 'FINISH_EDITING_WIDGETS' }
  | { type: 'FLIP_PAGE'; page: number }
  | { type: 'EXIT_ADDING_NEW_SYSTEM'; success: boolean };

const appConfig = getLocalAppConfig();

export const appMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0BLAdlgLgMQDaADALqKioD2sBWNOVIAHogIykCsGALDwDsAJgAcANgCcpSSIDMAGhABPRJPH8R48cI5jScuZO4BfE0rSZcBEh0pIQtevkbMH7BFw08DhwdME+PnFBJVVPblIMYTlBDkFRYUD-PzMLdAwAW2RcDABjZBwAN2RYDAB3LGgwfFhCAHkABQBRADkAfQBlZoAVHoBJVoBxTrJ7ajoGJhYPDj1RDFEjQX8QvljtMM5uYX4+QUjhIJW+bnE0kEssnJx8wpKyyurawgAxABl+xvbGgEEh5pjFhOKZuUAeSQcXhzUQccSiSRBOQCUIqRBibx8YTqbjGHanUSmcyXDLZXIFYqlCpVGAvZoAEX6PXaAHV+vSAT1RhRgZMXNN3JxhNw+ItEXxIRwgqJSHMtp5SBpdKcdnJFbDRKJBBcrmTbhSHhhYDUXDgoHUAMLverdLq9AbDbnjRx81wzTh6XikGWkRUcUQCKXieVJbxGeLwjhybhGEU60k3O6UsqQBhm9pPWl1V6DfqdAAS7QZTMGQ1Z7M5Tt5zjdgs8SVFMjkIUVMh4knlcniGDivt03C1RjkSXjmD1WTAOAArvkADZ0SANFodACybQAqkCHCD+WC2IgzgtCYT9gHxHMOPKobt1kczqdvXCVqPrrlMpOZzRUJPF1abc12jXVpNx5bdXQFcED3EL1JC1QQ1ilGRgzRBAkkEDBSFPKUoWgls5BfcdYDyAAnMBJ3aAAjWdcAgMoICwWBkCoxc2l+AAhd4AM6C0ACVmjadoOMGekqzAmsIP3BAJXQuCo10R9NVOeU+AkDBIkCSRDC7UgxD4AjEyI0jyKomiUxwJjZ0XRlOnYziul4-iOiE1oRK3CZxL3DwJSVYRtASbguDkxQUMEAwMHUcRYkkdRSDiLF9NwQhfnpel2laZoWS6ABNToemaFc3JdDz3U8OYe3iHT9m9eFvVRcIHwwNUpGjAcgn9PTiSuZAIHo9McDAcp2lgZRYHwMBMkIZoAA0mXaZLGWGNKMuy3L8sKnda0ghAAFpsSiBEYmg6KJEkGIQ3UHsJFivh-QRJZuCJYkcBoCA4BYK5rHwatQRK7auwwKEKo4U7fIMaRuHlC79l8nR5l8YwEv1e4qUzGp4DEn66y4GRokSAxhXxMQ6vRLhokhBsjjPDhEaTQ1jXwU1zW+3cSqjHTomxBIJSqnZhBDUnsTh1rQsRUQaYNKlU0ZjMaTR5nNskqVmwBmNZJlTS+ZQ+Syb0QJKeCanOoTclkfR9zMa2iR0JhOEESRFEr3QmJ-ERWQsWlMQaffac5wXCB5YkrzIuiALoNhXytQkENYowSKRUEZFgmCOQJC9j8MC-H9-Yxlm6xCGSHv9YGxFhWJo-QuP9kT8Rk9gtPpwDzzEBu3hhThAc9HhBJkPCYOVQkaMU8wh7ziNscDJIsicEo6icFojB6MY5js-N3OtuCXZIiEYH1jxYLwlaxYDFi5qa8i0f0nH3JDKnmfTIwScLMgRuSsiqJNNCtVjj8Ph5QHKIjACEVLIRSD0aY32MrPWiL86w3VFFvbgcRESxhjJ2WQak1TRSlCsYwuhtRj1fHuDagdEDNg0AgpBu8Hr70QNtOIPYU6IMiDsHQsVhAvm6r1KA7R+qDWGqNcaMCtqkBDJqTQMNdD6EMJIUcQjJJ-RTmKQ6uJYJSDOihbacIohxACsORhO8DhmDMEAA */
  createMachine(
    {
      context: { appConfig, test: 1 },
      tsTypes: {} as import('./App.machine.typegen').Typegen0,
      schema: {
        events: {} as Event,
        context: {
          appConfig: {} as AppConfig,
          test: {} as number,
        },
      },
      id: 'app',
      initial: 'init',
      states: {
        init: {
          always: [
            {
              target: 'main',
              cond: 'hasConnectedSystems',
            },
            {
              target: 'adding_new_system',
            },
          ],
        },
        main: {
          type: 'parallel',
          states: {
            canvas: {
              initial: 'widgets',
              states: {
                widgets: {
                  on: {
                    OPEN_SETTINGS: {
                      target: 'settings',
                    },
                    FLIP_PAGE: {},
                    EDIT_WIDGETS: {
                      target: 'editing_widgets',
                    },
                  },
                },
                settings: {
                  on: {
                    CLOSE_SETTINGS: {
                      target: 'widgets',
                    },
                  },
                },
                editing_widgets: {
                  on: {
                    FINISH_EDITING_WIDGETS: {
                      target: 'widgets',
                    },
                  },
                },
              },
            },
            menu: {
              initial: 'closed',
              states: {
                closed: {
                  on: {
                    OPEN_MENU: {
                      target: 'opened',
                    },
                  },
                },
                opened: {
                  on: {
                    CLOSE_MENU: {
                      target: 'closed',
                    },
                  },
                },
              },
            },
            screen_blinds: {
              initial: 'disabled',
              states: {
                disabled: {
                  on: {
                    ENABLE_SCREEN_BLINDS: {
                      target: 'enabled',
                    },
                  },
                },
                enabled: {
                  entry: send('CLOSE_MENU'),
                  on: {
                    DISABLE_SCREEN_BLINDS: {
                      target: 'disabled',
                    },
                  },
                },
              },
            },
          },
          on: {
            ADD_NEW_SYSTEM: {
              target: 'adding_new_system',
            },
          },
        },
        adding_new_system: {
          on: {
            EXIT_ADDING_NEW_SYSTEM: {
              target: 'init',
            },
          },
        },
      },
    },
    {
      actions: {
        bump: assign({
          test: context => context.test + 1,
        }),
      },
      guards: {
        hasConnectedSystems: context => !!context.appConfig?.systems?.length,
      },
    }
  );
