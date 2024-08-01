/*
    Immediately Invoked Function Expression (IIFE)
    To avoid global polution problems we use iife and to end its execution we
    must put a semicolon at the end 
    ()();
*/
// Syntax for iife or example ..
(function chai(){//Named IIFe
    console.log("Database Connected :")
})();

((argu)=>{//Unamed IIFE..
    console.log(`Db two also connected by ${argu}`)
})("mukesh");//argument passed .....