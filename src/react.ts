import { createComponent } from '@lit-labs/react'
import React from 'react'
import { AsyncAppend } from './components/async-append'
import { AsyncReplace } from './components/async-replace'
import { CacheComponent } from './components/cache-component'
import { ClassMap } from './components/class-map'
import { ConditionalTemplates } from './components/conditional-templates'
import { CustomAtributeConverter } from './components/custom-atribute-converter'
import { ElementComposition } from './components/element-composition'
import { ExpressionTypes } from './components/expression-types'
import { GuardDirective } from './components/guard-directive'
import { IfdefinedDirective } from './components/ifdefined-directive'
import { LiveDirective } from './components/live-directive'
import { MyElement } from './components/my-element/my-element'
import { RepeatingTemplates } from './components/repeating-templates'
import { SlottingChildren } from './components/slotting-children'
import { TemplateComposition } from './components/template-composition'

export const CustomAtributeConverterReact = createComponent(React, 'custom-atribute-converter', CustomAtributeConverter)
export const ExpressionTypesReact = createComponent(React, 'expression-types', ExpressionTypes)
export const MyElementReact = createComponent(React, 'my-element', MyElement)
export const ConditionalTemplatesReact = createComponent(React, 'conditional-templates', ConditionalTemplates)
export const RepeatingTemplatesReact = createComponent(React, 'repeating-templates', RepeatingTemplates)
export const SlottingChildrenReact = createComponent(React, 'slotting-children', SlottingChildren)
export const ElementCompositionReact = createComponent(React, 'element-composition', ElementComposition)
export const TemplateCompositionReact = createComponent(React, 'template-composition', TemplateComposition)
export const AsyncAppendReact = createComponent(React, 'async-append', AsyncAppend)
export const AsyncReplaceReact = createComponent(React, 'async-replace', AsyncReplace)
export const CacheComponentReact = createComponent(React, 'cache-component', CacheComponent)
export const ClassMapReact = createComponent(React, 'class-map', ClassMap)
export const GuardDirectiveReact = createComponent(React, 'guard-directive', GuardDirective)
export const IfdefinedDirectiveReact = createComponent(React, 'ifdefined-directive', IfdefinedDirective)
export const LiveDirectiveReact = createComponent(React, 'live-directive', LiveDirective)
