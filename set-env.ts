const { writeFile } = require('fs');
// Your environment.custom.ts file. Will be ignored by git.
const targetPath = './src/environments/environment.custom.ts';
// Load dotenv to work with process.env
require('dotenv').config();
// environment.ts file structure
const envConfigFile = `
  function getApiBasePath(): string {
    return (window as any).config.API_BASE_PATH  || 'default-url';
}
export const environment = {
 production: false,
 API_BASE_PATH: getApiBasePath(),
 MSAL: {
  API_URL: '${process.env.API_URL}'
},
 debugStream: '${process.env.DEBUG_STREAM}',
};
`;
writeFile(targetPath, envConfigFile, function (err) {
 if (err) {
  throw console.error(err);
 } else {
  console.log('Using custom environment');
}
});
