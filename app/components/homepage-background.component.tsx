"use client"
import { useIsDarkMode } from '@/hooks/styles/style-hooks';
import styles from '@/styles/components/homepage-background.module.css'
import { useEffect, useRef } from 'react'
type HomepageBackgroundComponentProps = {
  bgColor?: string;
};
export default function HomepageBackgroundComponent({
  bgColor,
}: HomepageBackgroundComponentProps) {
  const homebgRef: any = useRef();
  const isDark = useIsDarkMode();

  useEffect(() => {
    homebgRef.current.parentNode.style.position = "relative";
  }, []);

  useEffect(() => {
    console.log(
      "%cDebug IS DARK :: ",
      "background: #222; color: #bada55",
      isDark
    );
  }, [isDark]);

  return (
    <div
      ref={homebgRef}
      className={styles.homepage_background}
      style={{ backgroundColor: `${bgColor}` }}
    ></div>
  );
}