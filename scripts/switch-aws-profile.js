const fs = require('fs')
const ini = require('ini')
const path = require('path')

const run = async () => {
  let profileName = process.argv[2]
  if (!profileName) throw new Error('Profile name is required.')
  if (profileName === 'default') throw new Error('[default] profile is not allowed.')
  const credentialsPath = path.resolve(process.env.HOME, '.aws/credentials')
  const credentials = ini.parse(fs.readFileSync(credentialsPath, 'utf-8'))
  const profile = credentials[profileName] || credentials[`profile ${profileName}`]
  if (!profile) throw new Error(`Profile [${profileName}] not found.`)
  profileName = profileName.replace(/^profile /, '')
  credentials.default = profile
  const updatedConfig = ini.stringify(credentials)
  fs.writeFileSync(credentialsPath, updatedConfig)
  console.log(`Profile [${profileName}] switched to default.`)
}

const onError = err => {
  console.error(err.message)
  process.exit(1)
}

run()
  .catch(onError)
  .finally(process.exit)
