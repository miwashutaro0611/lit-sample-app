import React from 'react'
import { MyElement } from './my-element'
export declare const MyElementReact: React.ForwardRefExoticComponent<
  Pick<
    React.PropsWithChildren<
      Partial<Omit<MyElement, 'children'>> &
        Partial<{
          [x: string]: (e: Event) => void
        }> &
        Omit<React.HTMLAttributes<HTMLElement>, string>
    >,
    string
  > &
    React.RefAttributes<unknown>
>
