exports.handler = async (event, context) => {
  try {
    const { nickname } = JSON.parse(event.body);
    
    // Here you would add code to save to your database
    // This depends on which database you choose
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Nickname saved!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save nickname" })
    };
  }
};
