import { createComponent } from '@lit-labs/react'
import React from 'react'
import { MyElement } from './my-element'

export const MyElementReact = createComponent(React, 'my-element', MyElement)
