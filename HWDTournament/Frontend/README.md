# HWB cool api with Realtime database Updates 
HI There and welcome to the cool API

This helps to create,read, and update (event, eventdetail, tournaments. EventStatus)

This uses `SignalR` to update data in realtime when an EventDaetail is being updated/inserted in the database


# Additional implementation:

`Swagger Documentation`
`Policy Based Authentication`
`Role Based Authentication`
`Real time Data Updates`

# This Application Creats Stored procedures and triggers to the database located at HWBTournamentDbInitializer

# Please Note 
After visiting the website, you can nagivate to the root url instead of the swagger ui. i.e http://localhost:52940/ please do not change the port number make sure it runs on this port.

# Pre-Requisite
.Net Core 2.0
This appplication is build on `.net core 2.0` Please make sure you have .Net core 2.0 on the PC/Server to run this application.

# Configuration

Please make sure you change the connection string to an `sql server` connectionstring relative to 

TournamentAssement\HWDTournament

"connectionString": "Data Source=(LocalDb)\\Mssqllocaldb;Initial Catalog=HWB; Connection Timeout=5; Packet Size=4096;",
