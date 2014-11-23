Package.describe({
  summary: "Wrapper for jquery-waypoints.js",
  version: "1.1.0",
  git: "https://github.com/gabrielalmeida/meteor-jquery-waypoints.git",
});

Package.onUse(function(api) {
  if(api.versionsFrom)
    api.versionsFrom("METEOR@1.0");

  api.addFiles(['waypoints.min.js'], 'client');
});
