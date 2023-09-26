import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page" className='w-11/12 mx-auto'>
      <h1>404</h1>
      <p>page Not Found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    );
};

export default ErrorPage;