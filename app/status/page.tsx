import React from 'react';
import { Link } from 'react-router-dom';
import * as Container from '../container/container';

const StatusPage: React.FC = () => {
  const [apiResponse, setApiResponse] = React.useState('loading...');
  Container.CLIENT_API.get('/')
    .then((response) => {
      if (response.error) {
        setApiResponse(response.error.message);
      } else {
        setApiResponse(JSON.stringify(response.data));
      }
    })
    .catch((error: Error) => {
      setApiResponse(error.message);
    });
  return (
    <div>
      <h1>Home</h1>
      <p>{apiResponse}</p>
      <br />
      <Link
        to={{
          pathname: '/restaurants',
        }}
        className="text-blue-500"
      >
        Click to see the list of restaurants
      </Link>
    </div>
  );
};

export default StatusPage;
