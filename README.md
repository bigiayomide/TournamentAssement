##HWB cool api with Realtime database Updates 
HI There and welcome to the cool API

This helps to create,read, and update (event, eventdetail, tournaments. EventStatus)

This uses `SignalR` to update data in realtime when an EventDaetail is being updated/inserted in the database

#Additional implementation:

`Swagger Documentation`
`Policy Based Authentication`
`Role Based Authentication`

##Please Note 
##Pre-Requisite
.Net Core 2.0
This appplication is build on `.net core 2.0` Please make sure you have .Net core 2.0 on the PC/Server to run this application.

#Configuration

Please make sure you change the connection string to an `sql server` connectionstring

"connectionString": "Data Source=(LocalDb)\\Mssqllocaldb;Initial Catalog=HWB; Connection Timeout=5; Packet Size=4096;",