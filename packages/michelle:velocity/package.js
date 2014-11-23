Package.describe({
  summary: "Wrapper for Velocity.js",
  version: "1.1.0",
  git: "https://github.com/gabrielalmeida/meteor-velocityjs.git",
});

Package.onUse(function(api) {
  if(api.versionsFrom)
    api.versionsFrom("METEOR@1.0");

  api.addFiles(['velocity.min.js'], 'client');
});
