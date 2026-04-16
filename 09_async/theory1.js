/*

JS IS SYNCHRONOUS : codes cannot execute simultaneously , one at a time only, EK KE BAAD EK CODE EXECUTE HOGA
SINGLE THREADED LANG
doesnt feel like single threaded, becuase a lot of work is delegated and brought back 
only js engine -> single threaded -> may choke
only js engine is rarely used
it is always avbl with runtime environment -> browser, node js

THE ABOVE WERE DEFAULT JS BEHAVIOUR

Execeution context:
each operation waits for last one to complete before executing

Two types of code written in js:
1. Blocking Code : block program flow (read file sync)
2. Non Blocking Code : does not block execution (read file async)
 2 is not always better -> db(file) me write karne se pehle successful print kar diya -> use blocking here
 


*/ 