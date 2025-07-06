function Member(name){
    this.name=name;
    this.chatroom = null; 
}

Member.prototype={
    send:function(message,toMember){
        this.chatroom.send(message,this,toMember);
    },
    receive:function(message,fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

// chatromm
function ChatRoom(){
    this.members={};
}

ChatRoom.prototype={
    addMember:function(member){
        this.members[member.name]=member;
        member.chatroom=this;
    },
    send:function(message,fromMember,toMember){
        toMember.receive(message, fromMember);
    }
}

const chat=new ChatRoom();
const john=new Member("John");
const jane=new Member("Jane");
chat.addMember(john);
chat.addMember(jane);

john.send("Hello Jane", jane);