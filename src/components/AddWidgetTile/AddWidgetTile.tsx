import React, { FunctionComponent } from 'react';
import { Add } from '@mui/icons-material';
import styles from './AddWidgetTile.module.scss';

interface AddWidgetTileProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const AddWidgetTile: FunctionComponent<AddWidgetTileProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <Add sx={{ fontSize: '10rem' }} />
    </div>
  );
};
