/*
in JS , new keyword doesnt always mean creating object from class like c++ , leave that baggage

PROMISE : Represents eventual completion or failure of an asynchronous operation and its resulting value
(async operation is not completed directly, first placed within queue and operation is performed later)
Promise future me jaake complete hota hai
Network, cryptography, file operations -> use async
in mobile apps , hum sound devices ko activate karna chahte hai, camera devices ko activate karna chahte hai -> future promises hi dekhne hote hai

A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

PROMISES HAVE THREE STATES:
(1)PENDING The initial state. The operation has not yet completed (succeeded or failed).
(2)FULFULLED The operation succeeded. This is when the promise's .then() handler is called.
(3)REJECTED The operation failed. This is when the promise's .catch() handler is called.
Note that what "succeeded" or "failed" means here is up to the API in question. For example, fetch() rejects the returned promise if (among other reasons) a network error prevented the request being sent, but fulfills the promise if the server sent a response, even if the response was an error like 404 Not Found.


*/