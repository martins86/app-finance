const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'thiagodf',
    password: 'thiagodf@2022!',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/*.test.tsx',
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.test.tsx,**/*.test.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.exclusions': '**/myTests/**',
      'sonar.tests': './src/myTests',
      'sonar.test.inclusions':
        './src/myTests/**/*.test.tsx,./src/myTests/**/*.test.ts',
    },
  },
  () => process.exit()
);
