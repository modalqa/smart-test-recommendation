const { Command } = require('commander');
const { getGitDiff } = require('./core/diffReader');
const { extractChangedFunctions } = require('./core/analyzer');
const { recommendTestCases } = require('./core/recommender');
require('dotenv').config();

// Validate environment variables
if (!process.env.OPENROUTER_API_KEY || !process.env.OPENROUTER_API_URL) {
  console.error('❌ Missing required environment variables: OPENROUTER_API_KEY or OPENROUTER_API_URL');
  process.exit(1);
}

const program = new Command();

program
  .version('0.1.0')
  .description('Smart Test Coverage Recommender')
  .action(async () => {
    try {
      const diff = getGitDiff();
      const functions = extractChangedFunctions(diff).join('\n');
      const suggestion = await recommendTestCases(functions);
      console.log('\n💡 Rekomendasi Test Case:\n', suggestion);
    } catch (error) {
      console.error('❌ An error occurred:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
