/** @format */

import { PropsWithChildren } from 'react';

type TChildren = Pick<PropsWithChildren, 'children'>;

export type TDefaultProps<Type = unknown> = TChildren & {
    className?: string;
} & Type;

export type TDefaultPropsWithChildren<Type = unknown> = Required<TChildren> &
    TDefaultProps<Type> &
    Type;
