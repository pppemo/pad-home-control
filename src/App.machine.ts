import { createMachine, send } from 'xstate';
import { getLocalAppConfig } from './store/localAppConfig';

type Event =
  | { type: 'START_APP' }
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'ADD_NEW_SYSTEM' }
  | { type: 'ENABLE_SCREEN_BLIND' }
  | { type: 'DISABLE_SCREEN_BLIND' }
  | { type: 'EXIT_ADDING_NEW_SYSTEM'; success: boolean };

export const appMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0BLAdlgLgMQDaADALqKioD2sBWNOVIAHogIykCsGALDwDsAJgAcANgCcpSSIDMAGhABPRJPH8R48cI5jScuZO4BfE0rSZcBEh0pIQtevkbMH7BFw08DhwdME+PnFBJVVPblIMYTlBDkFRYUD-PzMLdAwAW2RcLLAcAFcMAGMAGzpIQgB5AAUAUQA5AH0AWUaAVTJ7ajoGJhYPbnFeAUjhYNI9STkOMMRhGQxJLzkZHWmdPjSQSyycnDzCjBpUfMqAYQAZKoBlOtaOrpYnPrdQQfEODHE+bmFuOR8dTcZbiOYIQx8DB-EGiCTiCQSUzmHYZbK5WDFABOYHyTQARqVcBAMBAsLBkITKo0AIIAIUu9xu5wASnVGk0GQBJBoAESeDheLn67kQ3G4ULWIWM2mmMXB4tEGDkf102g4okkcMk2126IOmJxeMJxIw+UppUqvK5N3pjKazLZHO5fIFPWcrgGYr+-GCgMEQzk-2G4IRSp+kzkoiBcVIQV1aP2hBpvN5TQadQA6g6AJo3AAqdRabscvWFbzYnA4XziglI4zriNIolCKkQvyiqykKu40b4Gq2KN2yAgZJwUCaODAAHcmrBlLB8GBMoQ6gANLn5pop60NADi6azuYLRZLQs9ooQAFphNIMJqYsNJFqpPK2whbxoEuJSIENZrRB7MwURwGgIDgFhdmsfBnjLC93kQK8ZgwDhuHiSZJGEYQfyMHhwXUTRsJ0PRRF8YwE0wfUMAANywGcMGnLBoDAfB4EFOCRQQzwOGCJZjGfH5VjkBFuHBIjlQDUjg3FaRfgovZclomdYI9TjK08GQlWfEF1D4ISRPBeJBGVZ8Yl-fs9KGQd0ko-ZDiKMoKggFTXi9BBfkkDB-FEDhAThBYf1bcJsN4athL4fxe17Qw5HkqjMnyIoTjOZz2NUisPBCKEBA4YZESMYxRDE4YUN8n5ItEaL4yHRNcgSwoXPLNz+xrLVfL4fzSECwyFiWQEeGWKMEh4jg4rsw1cRwAkiRwEkyQpKlUvdVzL1+JUWx4T5uDrUgeHGUMsK86tdCCYITtimrbIxbFJum01zUWxr4PUwQVSWZtBASARfh0g7hCOvQeKCYjqpshSDRu40ZqW0t0uarh7zrIZUJ2va+HBYJPNicVXqMFVPjG3AnrUjxhP+jbke23a0fBZDjADIZfx45sZGEeSRzHCcp1nedF2XYmMsQUgxLhQjtF0fRDB1S6BbcpCo3vTDhJ0iQlfBK9towDDJm2v5AhCf5gJMIA */
  createMachine(
    {
      context: { ...getLocalAppConfig() },
      tsTypes: {} as import('./App.machine.typegen').Typegen0,
      schema: { events: {} as Event },
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
            view: {
              initial: 'widgets',
              states: {
                widgets: {},
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
            screen_blind: {
              initial: 'disabled',
              states: {
                disabled: {
                  on: {
                    ENABLE_SCREEN_BLIND: {
                      target: 'enabled',
                    },
                  },
                },
                enabled: {
                  on: {
                    DISABLE_SCREEN_BLIND: {
                      target: 'disabled',
                    },
                  },
                  entry: send('CLOSE_MENU'),
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
      guards: {
        hasConnectedSystems: context => !!context.systems?.length,
      },
    }
  );
