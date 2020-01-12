import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const query = gql`
  {
    games {
      name
    }
  }
`;

const Test = () => {
  const { data, loading } = useQuery(query);
  console.log('test');
  return (
    <div>
      <p>Query test:</p>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Test;
