import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from './../Button/Button';
import styles from './CommunicationPanel.module.scss';

interface CommunicationPanelProps {
  title: string;
  children?: ReactNode;
  constructiveLabel?: string;
  destructiveLabel?: string;
  neutralLabel?: string;
  onConstructiveClick?: () => void;
  onDestructiveClick?: () => void;
  onNeutralClick?: () => void;
}

export const CommunicationPanel: FunctionComponent<CommunicationPanelProps> = ({
  title,
  children,
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
        {children && <div className={styles.content}>{children}</div>}
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
