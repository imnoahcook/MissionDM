import React from 'react';
import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';

const TargetInformation = props => {
  console.log(props);
  return (
    <>
      {props.gameInfo.alive ? (
        <>
          <div> big mem</div>
          <Target {...props.gameInfo.target} />
          <TargetSubmitForm refetch={props.refetch} gameId={props.gameId} />
        </>
      ) : null}
    </>
  );
};

export default TargetInformation;
