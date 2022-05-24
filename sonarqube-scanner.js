const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'admin',
    options: {
      'sonar.login': 'admin',
      'sonar.password': 'admin',
      'sonar.sourceEncoding': 'utf8',
      'sonar.sources': './src',
      'sonar.tests': './src/__tests__',
      'sonar.test.inclusions':
        './src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts',
      'sonar.exclusions':
        '**/__tests__/**,**/*.ts,**/*.js,src/index.tsx,src/utils/**',
      'sonar.typescript.tsconfigPath': 'tsconfig.json',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.eslint.reportPaths': 'eslint-report.json',
    },
  },
  () => process.exit()
);
