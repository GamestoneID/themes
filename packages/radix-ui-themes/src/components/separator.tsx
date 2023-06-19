'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { extractMarginProps, withMargin, withBreakpoints } from '../helpers';

import type { MarginProps, Color, Responsive } from '../helpers';

const separatorSizes = ['1', '2', '3', '4'] as const;
type SeparatorSize = (typeof separatorSizes)[number];
const defaultSeparatorSize: SeparatorSize = '1';

const defaultSeparatorColor: Color | undefined = undefined;

type SeparatorElement = React.ElementRef<typeof SeparatorPrimitive.Root>;
interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'color'>,
    MarginProps {
  size?: Responsive<SeparatorSize>;
  color?: Color | 'color';
}
const Separator = React.forwardRef<SeparatorElement, SeparatorProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = defaultSeparatorSize,
    color = defaultSeparatorColor,
    ...separatorProps
  } = marginRest;

  return (
    <SeparatorPrimitive.Root
      data-color-scale={color}
      {...separatorProps}
      ref={forwardedRef}
      className={classNames(
        'rui-Separator',
        withBreakpoints(size, 'size'),
        withMargin(marginProps),
        className
      )}
    />
  );
});
Separator.displayName = 'Separator';

export { separatorSizes, defaultSeparatorSize, defaultSeparatorColor, Separator };
export type { SeparatorSize };
