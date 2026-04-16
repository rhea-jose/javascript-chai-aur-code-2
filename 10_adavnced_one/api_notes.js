/*
    api : Ensure communication between code written in different programming languages/servers/web apps/mobile apps
    (1) Protocol
    (2) Data
    API IS JUST DATA : usko structure kaise karna hai, datatype kya hona chahiye
    We are not concerned with data kaha se aaya wagera details, we just are concerned with data itself

    APIS can be difficult to read:
    request data from url and paste it into jsonformatter.org -> format/beautify -> diff options like form, tree etc available

    Ready States in XML:
    0-> NO request sent -> client created, open() not yet called
    1->opened-> request sent 
    2-> headers received -> send() has been called and status and headers are available
    3->loading -> Downloading, responseText holds partial data
    4-> opeartion complete

    Core js : basic arithmentic ops, loops ,functions 
    excessive api's?
    Console.log() is also a developer tool in browser , debugging ke liye used  JS RUNTIME injects it

    Node js is an implementation of V8 engine: provides debug tools and access to some api's
 */