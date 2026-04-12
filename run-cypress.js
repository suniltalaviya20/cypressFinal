const { execSync } = require('child_process')
const configFile = process.argv[2] || '/env/QA_Env'
const specFolderPath = process.argv[3] ||'/testCases/API-tests'
const tag = process.argv[4] || ''   
installDependencies = 'npm install'
const grepEnv = tag ? `,grepTags="${tag}"` : '';
const command = `npx cypress run --env configFile="${configFile}"${grepEnv} --spec "${specFolderPath}"`
execSync(installDependencies,{stdio:'inherit'})
execSync(command,{stdio:'inherit'})



