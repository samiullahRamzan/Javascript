const items=[1,'sami',3,4,5,6,7,8,9,10];

function Iterator(items){
    this.items=items;
    this.index=0; // where we start in the collection
}

// it is for front to back .. we can also implement back to front only change the index logic
Iterator.prototype={
    hasNext:function(){
        return this.index<this.items.length;
    },
    next:function(){
        return this.items[this.index++];
    }
}

const iterator=new Iterator(items);

console.log('Iterating over items:');

while(iterator.hasNext()){
    console.log(iterator.next());
}