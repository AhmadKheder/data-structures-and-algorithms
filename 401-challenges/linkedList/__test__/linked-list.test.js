'use strict';
const LL = require('../linked-list/linked-list.js');

describe('Insert method',()=>{
    it('insert() can appeand when pass arg',()=>{
        let ll = new LL();
        ll.insert('appeand value');
        expect(ll.head.value).toEqual('appeand value');;
    })
    it('insert() can appeand when pass arg',()=>{
        let ll = new LL();
        // ll.insert('appeand value');
        ll.insert('appeand value111111111');
        ll.insert('appeand value222222222');
        // ll.insert('appeand value333333333');
        expect(ll.head.value).toEqual('appeand value111111111');
        expect(ll.current).toEqual('appeand value222222222');
        // expect(ll.current.next).toEqual('appeand value333333333');
    })
})