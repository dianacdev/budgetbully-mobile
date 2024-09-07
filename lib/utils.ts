export const callServer = async function (endpoint: string, isPost = false, postData = null) {
  // Define the options object and include the method explicitly
  const optionsObj: { method: string; headers?: { 'Content-type': string }; body?: string } = isPost
    ? { method: 'POST' }
    : { method: 'GET' }; // Explicitly set the method to GET

  // Add headers and body if it's a POST request
  if (isPost && postData !== null) {
    optionsObj.headers = { 'Content-type': 'application/json' };
    optionsObj.body = JSON.stringify(postData);
  }

  try {
    const response = await fetch(endpoint, optionsObj);

    // Check for server-side error or non-2xx status codes
    if (!response.ok) {
      // Handle non-2xx status codes (like 4xx or 5xx)
      await handleServerError(response);
      return;
    }

    // Process the successful response
    const data = await response.json();
    console.log(`Result from calling ${endpoint}: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    // Handle network or unexpected errors
    console.error('Network or unexpected error: ', error);
  }
};

// Handle server-side errors, including 4xx and 5xx
const handleServerError = async function (responseObject: Response) {
  const error = await responseObject.json();
  console.error('I received an error ', error);
};
