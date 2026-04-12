// code is divided into 2 parts then executed
// call stacks -> how code goes , executes and comes out

// code files -> global execution context -> kept in this variable -> diff for browser(window object) and node js,bun,deno

// js is single threaded -> evthg is a process acc to which work is done
// functional Ec
// eval ec

// Code Runs in 2 Phases:
// 1 -> Memory creation Phase or creation Phase (Reqd memory is allocated for program)
// 2-> Execution Phase 

// (1)->Global execution or Global environment -> allocated to this
// (2)-> saare varibles ko lo aur unme undefined likho, function name lo aur usme definiton rakho ->Cycle 1 completed
// (3)-> execution phase ->saare vars lo aur unme values bharo -> for functions inme toh bas defintion hote hai, toh extra nahi honge kuvh store
// -> function calls-> alag execution context shuru hota
// jitne bhi baar function execute hote hai -> (new execution envrionemt is created + execution thread)-> new executional context-> mem+ ec phase again executed for function

// value is then returned to parent executional context
// once returned the ec formed for the function gets delete =d and a new one is created each time the function is called

// call stack
