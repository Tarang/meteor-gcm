Package.describe({
  summary: "A wrapper for node-gcm"
});

Npm.depends({'node-gcm':"0.9.10"});

Package.on_use(function (api) {
	api.add_files('lib.js', 'server');
	api.export("GCM")
});