const { execSync } = require('child_process')
const configFile = process.argv[2] || 'QA_Env'
const specFolderPath = process.argv[3] || 'QA_Env'
installDependencies = 'npm install'
const command = `npx cypress run --env configFile = "${configFile}" --spec "${specFolderPath}"` 
execSync(installDependencies,{stdio:'inherit'})
execSync(command,{stdio:'inherit'})
