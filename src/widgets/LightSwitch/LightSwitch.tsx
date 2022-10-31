import React, { FunctionComponent } from 'react';
import { Textfit } from 'react-textfit';
import cn from 'classnames';
import styles from './LightSwitch.module.scss';

interface LightSwitchProps {
  isOn: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const LightSwitch: FunctionComponent<LightSwitchProps> = ({
  isOn,
  label,
  onClick,
}) => {
  return (
    <div className={cn(styles.root, { [styles.on]: isOn })} onClick={onClick}>
      <div className={cn(styles.background, { [styles.visible]: isOn })} />
      <Textfit className={styles.textfit}>{label}</Textfit>
    </div>
  );
};
