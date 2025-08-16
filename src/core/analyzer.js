function extractChangedFunctions(diff) {
  const lines = diff.split('\n');
  return lines.filter(line => line.startsWith('+') && line.includes('function'));
}

module.exports = { extractChangedFunctions };
