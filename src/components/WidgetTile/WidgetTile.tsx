import React, { FunctionComponent, ReactNode, useState } from 'react';
import cn from 'classnames';
import {
  SwapHoriz,
  Settings,
  DeleteForever,
  ArrowBack,
} from '@mui/icons-material';
import styles from './WidgetTile.module.scss';
import { Button } from '../Button/Button';

interface WidgetTileProps {
  isConfigOpen: boolean;
  children: ReactNode;
  onSettingsClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ConfigOverlayProps {
  onSettingsClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfigOverlay: FunctionComponent<ConfigOverlayProps> = ({
  onDeleteClick,
  onSettingsClick,
}) => {
  const [shouldShowDeleteConfirmation, setShouldShowDeleteConfirmation] =
    useState<boolean>(false);

  return (
    <div className={styles.configOverlay}>
      <div className={styles.moveContainer}>
        <SwapHoriz fontSize="large" sx={{ fontSize: '6rem' }} />
      </div>
      <div className={styles.iconsContainer}>
        {shouldShowDeleteConfirmation ? (
          <>
            <Button
              variant="contained"
              size="small"
              onClick={() => setShouldShowDeleteConfirmation(false)}
            >
              <ArrowBack />
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={onDeleteClick}
            >
              <DeleteForever />
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" size="small" onClick={onSettingsClick}>
              <Settings />
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => setShouldShowDeleteConfirmation(true)}
            >
              <DeleteForever />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export const WidgetTile: FunctionComponent<WidgetTileProps> = ({
  isConfigOpen,
  children,
  onDeleteClick,
  onSettingsClick,
}) => {
  const delayStyle = {
    animationDelay: `-${Math.floor(Math.random() * 1000)}ms`,
  };

  return (
    <div
      style={delayStyle}
      className={cn(styles.root, { [styles.wobble]: isConfigOpen })}
    >
      {isConfigOpen && (
        <ConfigOverlay
          onDeleteClick={onDeleteClick}
          onSettingsClick={onSettingsClick}
        />
      )}

      {children}
    </div>
  );
};
