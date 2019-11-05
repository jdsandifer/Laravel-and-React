# A Simple Project to Try Out a Laravel API with a React UI

## Setting Up a Database


## Running the Project
To install the project and run it on your machine, first ensure you have the latest PHP, Composer, and Node. Then follow these steps:

1. Clone the repo.
1. Open a terminal and navigate to the `/Backend` folder inside the repo.
1. Run `composer install` to install the needed backend files.
1. Use [RemoteMySQL.com](https://www.remotemysql.com) or create the local or remote relational database of your choice to use for this project.
1. Add a `.env` file to the `/Backend` directory to link to your database.
1. Run `php artisan migrate` to setup the database with the required tables for this project.
1. Run `php artisan serve` to launch the backend. A message should appear like this: `Laravel development server started: http://127.0.0.1:8000`.
1. At this point, you might see a message from your Anti-virus or firewall program. Create an exception for the PHP executable if required.
1. Open a second terminal window and navigate to the `/Frontend` folder in the repo.
1. Run `npm i` to install the required Node modules.
1. Run `npm start` to launch the frontend. This should open a web browser pointed at `localhost:3000`.
1. Try out the project!
