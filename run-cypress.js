const { execSync } = require('child_process')
const configFile = process.argv[2] || '/env/QA_Env'
const specFolderPath = process.argv[3] ||'/testCases/API-tests'
installDependencies = 'npm install'
const command = `npx cypress run --env configFile = "${configFile}" --spec "${specFolderPath}"` 
execSync(installDependencies,{stdio:'inherit'})
execSync(command,{stdio:'inherit'})



