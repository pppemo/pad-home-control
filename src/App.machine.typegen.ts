// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {};
  eventsCausingServices: {};
  eventsCausingGuards: {
    hasConnectedSystems: '';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'adding_new_system'
    | 'init'
    | 'main'
    | 'main.menu'
    | 'main.menu.closed'
    | 'main.menu.opened'
    | 'main.screen_blind'
    | 'main.screen_blind.disabled'
    | 'main.screen_blind.enabled'
    | 'main.view'
    | 'main.view.widgets'
    | {
        main?:
          | 'menu'
          | 'screen_blind'
          | 'view'
          | {
              menu?: 'closed' | 'opened';
              screen_blind?: 'disabled' | 'enabled';
              view?: 'widgets';
            };
      };
  tags: never;
}
