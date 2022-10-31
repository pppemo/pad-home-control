import React from 'react';
import { CommunicationPanel } from './components/CommunicationPanel/CommunicationPanel';
import { Button } from './components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useMachine } from '@xstate/react';
import { appMachine } from './App.machine';
import { WidgetTile } from './components/WidgetTile/WidgetTile';
import { LightSwitch } from './widgets/LightSwitch/LightSwitch';
import './App.module.scss';

function App() {
  const { t } = useTranslation();
  const [state, send] = useMachine(appMachine);

  const LeftButtons = (
    <>
      <Button color="primary" onClick={() => send('OPEN_MENU')}>
        OPEN menu
      </Button>
      <Button color="primary" onClick={() => send('CLOSE_MENU')}>
        CLOSE
      </Button>
    </>
  );

  return (
    <>
      <CommunicationPanel
        title="Finally! Welcome!"
        neutralLabel="OK"
        onNeutralClick={() => {}}
        buttonsLeft={LeftButtons}
      >
        <div style={{ width: 250, height: 250 }}>
          <LightSwitch label="Salon" />
        </div>
        <div style={{ width: 250, height: 250 }}>
          <WidgetTile
            isConfigOpen
            onDeleteClick={() => {}}
            onSettingsClick={() => {}}
          >
            <LightSwitch isOn label="Salon" />
          </WidgetTile>
        </div>
      </CommunicationPanel>
    </>
  );
}

export default App;
