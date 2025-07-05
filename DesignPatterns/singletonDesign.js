function Process(state){
   this.state = state;
}

// limit the number of instances to one of manager..
const singletonManager = (function(){
    function processManager(){
        this.numProcesses=0;
    }

    let pManager;

    function createProcessManager() {
        pManager=new processManager;
        return pManager;
    }

    return {
        getProcessManager: ()=> {
            if (!pManager) {
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})()

const processManager1 = singletonManager.getProcessManager();
const processManager2 = singletonManager.getProcessManager();

console.log(processManager1); // ProcessManager { numProcesses: 0 }

console.log(processManager1 === processManager2); // true, both are the same instance