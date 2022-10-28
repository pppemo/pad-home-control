import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from './../Button/Button';
import styles from './CommunicationPanel.module.scss';

interface CommunicationPanelProps {
  title: string;
  content?: ReactNode;
  constructiveLabel?: string;
  destructiveLabel?: string;
  neutralLabel?: string;
  onConstructiveClick: () => {};
  onDestructiveClick: () => {};
  onNeutralClick: () => {};
}

export const CommunicationPanel: FunctionComponent<CommunicationPanelProps> = ({
  title,
  content,
  constructiveLabel,
  destructiveLabel,
  neutralLabel,
  onConstructiveClick,
  onDestructiveClick,
  onNeutralClick,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.scrollable}>
        {content && <div className={styles.content}>{content}</div>}
        <div className={styles.buttons}>
          {destructiveLabel && onDestructiveClick && (
            <>
              <Button color="error" fullWidth onClick={onDestructiveClick}>
                {destructiveLabel}
              </Button>
            </>
          )}
          {neutralLabel && onNeutralClick && (
            <>
              <Button color="primary" fullWidth onClick={onNeutralClick}>
                {neutralLabel}
              </Button>
            </>
          )}
          {constructiveLabel && onConstructiveClick && (
            <>
              <Button color="success" fullWidth onClick={onConstructiveClick}>
                {constructiveLabel}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
