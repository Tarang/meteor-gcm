Package.describe({
  summary: "Use Node-GCM package"
});

Npm.depends({'node-gcm':"0.9.6"});

Package.on_use(function (api) {
	api.export("GCM")
  api.add_files('lib.js', 'server');
});