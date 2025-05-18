'use client';

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import * as Container from '../../lib/container/container';

const StatusPage: React.FC = () => {
  const [apiResponse, setApiResponse] = useState('loading...');
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
      <Link href="/restaurants" className="text-blue-500">
        Click to see the list of restaurants
      </Link>
    </div>
  );
};

export default StatusPage;
