import React from 'react';
import {
  Button as ButtonMUI,
  ButtonProps as ButtonMUIProps,
} from '@mui/material';
import styles from './Button.module.scss';

interface ButtonProps extends Omit<ButtonMUIProps, 'classes' | 'className'> {
  children: string;
}

export const Button = ({
  children,
  variant = 'contained',
  disableElevation = true,
  size = 'large',
  ...props
}: ButtonProps) => {
  return (
    <ButtonMUI
      className={styles.root}
      variant={variant}
      disableElevation={disableElevation}
      size={size}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
};
