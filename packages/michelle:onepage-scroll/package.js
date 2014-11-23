Package.describe({
  summary: "Wrapper for onepage-scroll.js",
  version: "1.3.1",
  git: "https://github.com/gabrielalmeida/meteor-onepage-scroll.git",
});

Package.onUse(function(api) {
  if(api.versionsFrom)
    api.versionsFrom("METEOR@1.0");

  api.addFiles(['onepage-scroll.css', 'jquery.onepage-scroll.min.js'], 'client');
});
