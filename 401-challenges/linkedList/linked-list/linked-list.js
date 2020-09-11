'use strict';

const Node = require('./node.js');
class LinkedList {
    
    constructor() {
        this.head = null;
        this.current = null;
    }
    insert(value) {
        let node = new Node(); // value: value, next: null
    let counter = 0;
        if (!this.head) { 
            node.value = value;
            this.head = node;//node.value = 'smthg'
            this.current =  this.head ;
            console.log(`16=====.=>>>>>> this is this`,this);
            return this;
        }
        if(this.current == this.head){//ll has one node
            this.current = this.head.next;
            this.current = value; 
            counter += 1;
            console.log('>>>>>>>>>>>',this.current);
             // this.current.next = null;
             return this;
        }

        if(this.current != this.head){//ll has one node
            for(let i = 0  ; i <= counter;i++){
                this.current = this.head.next;

            }
            this.current =  this.current.next;
            this.current = value; 
             return this;
        }
        // if(this.current.next == undefined){
        //     this.current.next = value;
        // console.log('THIS.CURRENT.next',this.current.next);
        //     return this;
        // }
        // while(this.current.next != null){
        //     this.current = this.current.next;
        // }
        // this.current.next = value;
    }
        
    includes(value){
        if(isListEmpty(this)){
            console.log('The List is Empty.');
        }else{
            let pointer = this.head;
            while(pointer.value != value){
                pointer = pointer.next;
            }
          return  pointer.value == value ? 1 : 0  ;
        }
    }
    toString(){
       if( isListEmpty(this)){
        console.log('The List is Empty.');
       }else{
        let pointer = this.head;
        while(pointer.next){
            console.log(`{${pointer.value} -> }`)
            pointer = pointer.next;
        }
       
       }

        
    }
}
function isListEmpty(list){
    return list.head == null ? 1 : 0 ;  
}
module.exports = LinkedList;