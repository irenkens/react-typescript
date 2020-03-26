import * as React from 'react';
import './hello.scss';

export interface HelloProps { param: string }

export const Hello = ({ param }: HelloProps) => (
  <h1>
    Hello&nbsp;
    {param}
    !
  </h1>
);
