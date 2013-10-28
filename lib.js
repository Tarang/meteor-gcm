if(typeof(Npm) != "undefined") {
	GCM = Npm.require("node-gcm");
}
else
{
	GCM = __meteor_bootstrap__.require("node-gcm");
}