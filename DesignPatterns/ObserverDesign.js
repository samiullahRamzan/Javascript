// create subject . keep track of observers
// notify observers when state changes
function Subject(){
    this.observers = []; // array observers function
}

Subject.prototype={
    // I wanna get news from subject 
    subscribe:function(fn){
        this.observers.push(fn);
    },
    unsubscribe:function(fnToRemove){
       this.observers=this.observers.filter(fn=>{
             if(fn!=fnToRemove){
                return fn;  
             }
       })
    },
    // notify all observers
    // call each observer function
    fire:function(){
        this.observers.forEach(fn=>{
            fn.call(); // call each observer function
        })
    }
}

const subject = new Subject();

function Observer1(){
    console.log("Observer 1 firing");
}

function Observer2(){
    console.log("Observer 2 firing");
}               

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer2);

subject.fire(); // Observer 1 notified
