import React, { useEffect } from 'react';
import axios from 'axios';

const OAuthCallback = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = JSON.parse(decodeURIComponent(urlParams.get('state')));

      if (code) {
        try {
          // Exchange authorization code for access token
          const response = await axios.post(
            'https://hiring.reachinbox.xyz/api/v1/auth/google-login',
            new URLSearchParams({
              code: code,
              client_id: '55968650598-ge128kr3vnl9vibj269u9bnvdcjd4hlt.apps.googleusercontent.com', // Replace with your Google client ID
              client_secret: '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', // Replace with your Google client secret
              redirect_uri: 'http://localhost:5173/onebox',
              grant_type: 'authorization_code',
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );

          const token = response.data.token; // Adjust based on API response

          // Store the token
          localStorage.setItem('authToken', token);

          // Redirect to the intended route
          window.location.href = state.redirectTo;
        } catch (error) {
          console.error('Error during token exchange:', error);
          window.location.href = '/error'; // Redirect to an error page
        }
      }
    };

    fetchToken();
  }, []);

  return <div>Loading...</div>;
};

export default OAuthCallback;