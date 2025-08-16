# Smart Test Recommendation

An AI-powered tool that analyzes Git code changes and automatically generates test case recommendations for JavaScript/Node.js applications.

## Installation

```bash
npm install smart-test-recommender
```

## Configuration

Create a `.env` file in your project root with:

```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_API_URL=https://openrouter.ai/api/v1/chat/completions
```

## Usage

After making changes to your code and committing them to Git, run:

```bash
npx smart-recommender
```

### Example Output

When you run the tool, it will analyze your changes and provide test case recommendations like this:

```javascript
💡 Test Case Recommendation:

test('extractChangedFunctions filters out non-function lines', () => {
  const diff = `
    +function test1() {}
    +const x = 10;
    +function test2(param) { return param * 2; }
    +{ some: 'object' }
    +function test3() { let x = 5; }
  `;

  const expected = [
    '+function test1() {}',
    '+function test2(param) { return param * 2; }',
    '+function test3() { let x = 5; }'
  ];

  const result = extractChangedFunctions(diff.split('\n'));
  expect(result).toEqual(expected);
});
```

## Features

- Analyzes code changes using Git diff
- Identifies modified functions automatically
- Generates relevant test case recommendations using AI
- Supports JavaScript/Node.js applications
- Provides detailed test examples with assertions
- Handles various function declaration patterns

## Output Format

The tool provides:
- Test case recommendations with example code
- Error messages if any issues occur

## Requirements

- Node.js installed
- Git repository
- OpenRouter API key (sign up at openrouter.ai)

## Error Handling

If you encounter errors, check:
1. Your `.env` file configuration
2. Network connectivity to OpenRouter API
3. Git repository status

## Supported Test Patterns

The tool can recommend tests for:
- Function declarations
- Method implementations
- Edge cases and input validation
- Return value verification
- Error handling scenarios
