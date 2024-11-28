import { ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.screen}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
