const data = require('./courses_data.json')

const sendJsonToApi = async (data) => {
  try {
    const response = await fetch('http://localhost:4000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3MjgwMzA5ODksImV4cCI6MTcyODAzNDU4OX0.a8kfa5ge2tb-_IRbYHU0WiZfhbemncb37qWKIF1OOL0",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('API response:', result);
    return result;
  } catch (error) {
    console.error('Error sending JSON to API:', error);
    throw error;
  }
};


(async() => {
  for (const item of data) {
    await sendJsonToApi(item)
  }
})()