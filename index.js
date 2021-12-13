const core = require('@actions/core')
const github = require('@actions/github')

function main() {
  let payload = github.context.payload
  const key = core.getInput('key')
  if (!key) {
    console.log(payload)
    return
  }
  for (const prop of key.split('.')) {
    payload = payload[prop]
  }

  console.log(payload)
}

main()
