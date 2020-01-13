import React from 'react';

import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';
import Dead from './Dead';

const TargetInformation = props => {
  console.log(props);
  return (
    <>
      {props.gameInfo.alive ? (
        <>
          <div>big mem</div>
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
