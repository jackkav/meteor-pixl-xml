Package.describe({
  name: 'pixl-xml',
  version: '1.0.2',
  summary: 'Wrapper for pixl-xml npm package',
  git: 'https://github.com/jhuckaby/pixl-xml',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('pixl-xml.js','server');
  api.export('XML');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pixl-xml');
  api.addFiles('pixl-xml-tests.js','server');
});
