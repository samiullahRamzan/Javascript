// immediate retry pattern
// This pattern is used to retry an operation immediately if it fails, up to a maximum number of attempts.
async function retryOperation(){
    let currentTry = 0;

    while(true){
        try{
            externalService();
            console.log("Operation succeeded");
            break; // Exit the loop if the operation is successful
        }catch(err){
            currentTry++;
            console.log(`Operation failed:${currentTry} = ${err}`);
            if(currentTry >= 10){
                console.log("Max retries reached");
                break;
            }
        }
        await sleep(3000); // Wait for 3 seconds before retrying... retry after delay example
    }
}

function externalService(){

    console.log("Calling external service...");
    const shouldPass=Math.random()<0.5; 

    if(shouldPass)
        return true; // Simulate a successful operation
    else
        throw 'server error';
    //throw new Error("Service unavailable");
    //return true
}

retryOperation()

////////////////////////////////////
async function sleep(ms){
    return new Promise(resolve => setTimeout(()=> resolve(), ms));
}