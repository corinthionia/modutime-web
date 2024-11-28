import { createElement, HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { TEXT_TAGS, TYPOGRAPHY, COLORS } from './constants';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  tag?: keyof typeof TEXT_TAGS;
  typo: keyof typeof TYPOGRAPHY;
  color?: keyof typeof COLORS;
  children: ReactNode;
}

export function Text({ tag = 'span', typo, color, children, className, ...rest }: TextProps) {
  return createElement(
    tag,
    { className: clsx('text', `text-${typo}`, `text-${color}`, className), ...rest },
    children
  );
}
