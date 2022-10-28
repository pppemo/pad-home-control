import React from 'react';
import { CommunicationPanel } from './components/CommunicationPanel/CommunicationPanel';
import { useTranslation } from 'react-i18next';
import './App.module.scss';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <CommunicationPanel
        title="Finally! Welcome!"
        neutralLabel="OK"
        onNeutralClick={() => alert('Hej!')}
      >
        This is incredibly awesome!!!
      </CommunicationPanel>
    </>
  );
}

export default App;
