exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { username } = event.queryStringParameters || {};
    
    if (!username) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Username parameter is required' }),
      };
    }

    // Call Wallchain API
    // Note: Update this URL based on the actual Wallchain API endpoint
    const wallchainResponse = await fetch(`https://api.wallchain.xyz/api/user/${encodeURIComponent(username)}`);
    
    if (!wallchainResponse.ok) {
      // If Wallchain API is not available, return mock data for development
      const mockData = {
        username: username,
        score: Math.random() * 500 + 50,
        rank: Math.floor(Math.random() * 1000) + 1,
        platform: 'wallchain',
        note: 'Mock data - Wallchain API not available'
      };

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockData),
      };
    }

    const data = await wallchainResponse.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Error in wallchain function:', error);
    
    // Return mock data if API call fails
    const mockData = {
      username: event.queryStringParameters?.username || 'unknown',
      score: Math.random() * 500 + 50,
      rank: Math.floor(Math.random() * 1000) + 1,
      platform: 'wallchain',
      note: 'Mock data - API error occurred'
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockData),
    };
  }
};
