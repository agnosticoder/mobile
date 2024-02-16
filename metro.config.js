const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;

// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../');

console.log('workspaceRoot', workspaceRoot);

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = withNativeWind(config, { input: "./src/global.css" });
