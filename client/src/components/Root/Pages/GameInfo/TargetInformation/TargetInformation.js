import React from 'react';

import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';
import Dead from './Dead';
import { Card, Elevation } from '@blueprintjs/core';

const TargetInformation = props => {
  console.log(props);
  return (
    <Card elevation={Elevation.TWO}>
      {props.gameInfo.alive ? (
        <>
          <Target {...props.gameInfo.target} />
          <TargetSubmitForm refetch={props.refetch} gameId={props.gameId} />
        </>
      ) : (
        <Dead />
      )}
    </Card>
  );
};

export default TargetInformation;
