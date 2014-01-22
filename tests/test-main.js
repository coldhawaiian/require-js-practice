// Documentation: http://karma-runner.github.io/0.10/plus/requirejs.html
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec[.]js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from "/base"
  baseUrl: "/base/scripts",
  // Ask Require.js to load these files (all of our tests)
  deps: tests,
  // Start test run, once Require.js is done
  callback: window.__karma__.start
});
