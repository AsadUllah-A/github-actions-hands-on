const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  const greeting = `Hello, ${nameToGreet}! Welcome to Custom GitHub Actions!`;
  
  console.log(greeting);
  core.setOutput('greeting-result', greeting);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event context action: ${github.context.action}`);
} catch (error) {
  core.setFailed(error.message);
}