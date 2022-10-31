import React, { FunctionComponent, useState, useEffect } from 'react';
import { Textfit } from 'react-textfit';
import cn from 'classnames';
import styles from './LightSwitch.module.scss';

interface LightSwitchProps {
  isOn?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const LightSwitch: FunctionComponent<LightSwitchProps> = ({
  isOn: isOnDefault = false,
  label,
  onClick,
}) => {
  const [isOn, setIsOn] = useState<boolean>(isOnDefault);

  useEffect(() => {
    setIsOn(isOnDefault);
  }, [isOnDefault]);

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOn(!isOn);
    onClick && onClick(event);
  };

  return (
    <div
      className={cn(styles.root, { [styles.on]: isOn })}
      onClick={handleOnClick}
    >
      <div className={cn(styles.background, { [styles.visible]: isOn })} />
      <Textfit className={styles.textfit}>{label}</Textfit>
    </div>
  );
};
