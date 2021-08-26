db.createUser(
	{
		user: "upload",
		pwd: "password",
		roles: [ { role: "readWrite", db: "videos" }]
	}
);

db.createUser(
	{
		user: "stream",
		pwd: "password",
		roles: [ { role: "readWrite", db: "videos" }]
	}
);
