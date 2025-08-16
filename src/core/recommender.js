const axios = require('axios');

async function recommendTestCases(codeSnippet) {
  const prompt = `The following code changes:\n\n${codeSnippet}\n\nPlease recommend a test case.`;

  const response = await axios.post(process.env.OPENROUTER_API_URL, {
    model: "mistralai/mistral-small-3.2-24b-instruct:free",
    messages: [{ role: "user", content: prompt }],
  }, {
    headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` }
  });

  return response.data.choices[0].message.content;
}

module.exports = { recommendTestCases };
