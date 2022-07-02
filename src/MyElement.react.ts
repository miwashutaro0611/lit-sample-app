import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyElement } from './my-element';

export const MyElementReact = createComponent(React, 'my-element', MyElement)