import { createComponent } from '@lit-labs/react'
import React from 'react'
import { AsyncAppend } from './sample/async-append'
import { AsyncReplace } from './sample/async-replace'
import { CacheComponent } from './sample/cache-component'
import { ClassMap } from './sample/class-map'
import { ConditionalTemplates } from './sample/conditional-templates'
import { CustomAtributeConverter } from './sample/custom-atribute-converter'
import { ElementComposition } from './sample/element-composition'
import { ExpressionTypes } from './sample/expression-types'
import { GuardDirective } from './sample/guard-directive'
import { IfdefinedDirective } from './sample/ifdefined-directive'
import { LiveDirective } from './sample/live-directive'
import { MyElement } from './sample/my-element/my-element'
import { RepeatingTemplates } from './sample/repeating-templates'
import { SlottingChildren } from './sample/slotting-children'
import { TemplateComposition } from './sample/template-composition'

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
