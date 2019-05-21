## Setting up server
This application uses postgres as the backend.  Create a new postgres database and then run
```
yarn migrate
yarn seed
```

To apply sequelize migrations and populate initial data.

### sequelize config
Create a copy of config/config.json named config.json and update the username and password for the database.

### app config
create a copy of .env.example named .env and update the values
