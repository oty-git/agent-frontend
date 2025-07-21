import React, { memo } from 'react';
import { useTheme } from '../../../shared/lib/hooks/useTheme/useTheme';
import { Theme } from '../../../shared/const/theme';
import styles from './ThemeSwitcher.module.scss';

interface ToggleThemeProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className = '' }: ToggleThemeProps) => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case Theme.DARK:
        return '🌙';
      case Theme.LIGHT:
      default:
        return '☀️';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case Theme.DARK:
        return 'Dark';
      case Theme.LIGHT:
      default:
        return 'Light';
    }
  };

  return (
    <button
      type="button"
      className={`${styles.toggleTheme} ${className}`}
      onClick={() => toggleTheme()}
      aria-label={`Switch theme. Current theme: ${getThemeLabel()}`}
      title={`Current theme: ${getThemeLabel()}. Click to switch.`}
    >
      <span className={styles.icon}>{getThemeIcon()}</span>
      <span className={styles.label}>{getThemeLabel()}</span>
    </button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
