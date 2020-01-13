import React from 'react';

import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';
import Dead from './Dead';
import { Card, Elevation } from '@blueprintjs/core';

const TargetInformation = props => {
  console.log('myprops', props);
  return (
    <>
      {props.gameInfo.alive ? (
        <>
          <Target {...props.gameInfo.target} />
          <TargetSubmitForm refetch={props.refetch} gameId={props.gameId} />
        </>
      ) : (
        <Dead />
      )}
    </>
  );
};

export default TargetInformation;
