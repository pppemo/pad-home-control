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
    | 'main.canvas'
    | 'main.canvas.editing_widgets'
    | 'main.canvas.settings'
    | 'main.canvas.widgets'
    | 'main.menu'
    | 'main.menu.closed'
    | 'main.menu.opened'
    | 'main.screen_blinds'
    | 'main.screen_blinds.disabled'
    | 'main.screen_blinds.enabled'
    | {
        main?:
          | 'canvas'
          | 'menu'
          | 'screen_blinds'
          | {
              canvas?: 'editing_widgets' | 'settings' | 'widgets';
              menu?: 'closed' | 'opened';
              screen_blinds?: 'disabled' | 'enabled';
            };
      };
  tags: never;
}
