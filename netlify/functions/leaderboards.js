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

    // Fetch both APIs in parallel
    const [kaitoResponse, wallchainResponse] = await Promise.allSettled([
      fetch(`https://api.kaito.ai/api/v1/yaps?username=${encodeURIComponent(username)}`),
      fetch(`https://api.wallchain.xyz/api/user/${encodeURIComponent(username)}`)
    ]);

    const result = {
      username: username,
      kaito: null,
      wallchain: null,
      errors: []
    };

    // Process Kaito response
    if (kaitoResponse.status === 'fulfilled' && kaitoResponse.value.ok) {
      result.kaito = await kaitoResponse.value.json();
    } else {
      result.errors.push('Failed to fetch Kaito data');
    }

    // Process Wallchain response
    if (wallchainResponse.status === 'fulfilled' && wallchainResponse.value.ok) {
      result.wallchain = await wallchainResponse.value.json();
    } else {
      // Return mock Wallchain data if API fails
      result.wallchain = {
        username: username,
        score: Math.random() * 500 + 50,
        rank: Math.floor(Math.random() * 1000) + 1,
        platform: 'wallchain',
        note: 'Mock data - Wallchain API not available'
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    };

  } catch (error) {
    console.error('Error in leaderboards function:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
    };
  }
};
