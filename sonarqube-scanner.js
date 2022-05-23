const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'thiagodf',
    password: 'Thiagodf@2022!',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/__tests__/**,**/*.ts,**/*.js',
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.test.tsx,**/*.test.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.exclusions': '',
      'sonar.tests': './src/__tests__',
      'sonar.test.inclusions':
        './src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts',
      'sonar.eslint.reportPaths': 'eslint-report.json',
    },
  },
  () => process.exit()
);
