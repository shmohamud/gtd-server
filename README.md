# Directory Organization:

# ************  Server Side (/gtd-server/src/...) ********************************

# controllers: These serve as an interface between client-side requests and MongoDB and are separated by model (i.e. Document/Subdocument)

# db: contains config Mongoose and MongoDB instance @ mongodb://127.0.0.1:27017/gtd-api

# routes: These contain all HTTP requests separated by model (i.e. Document/Subdocument)

# server: contains config (middleware/boilerplate) for Express JS server

# Features

# Full CRUD for Project, Action, Braindump models

# Chalk JS for styled error logging 
