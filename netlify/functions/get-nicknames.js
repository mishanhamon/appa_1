exports.handler = async (event, context) => {
  try {
    // Here you would add code to retrieve from your database
    
    return {
      statusCode: 200,
      body: JSON.stringify({ nicknames: ["ExampleUser", "WebDev42", "NetlifyFan"] })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to retrieve nicknames" })
    };
  }
};
