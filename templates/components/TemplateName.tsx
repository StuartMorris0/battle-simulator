import React from 'react';

import { TemplateNameWrapper } from './TemplateName.styles';

import { ITemplateNameProps } from './TemplateName.types';

const TemplateName: React.FC<ITemplateNameProps> = (props: ITemplateNameProps) => (
  <TemplateNameWrapper data-testid="TemplateName">
    <span>TemplateName Component</span>
  </TemplateNameWrapper>
);

export default TemplateName;
