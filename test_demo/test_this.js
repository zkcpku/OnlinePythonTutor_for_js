"use strict";

const Person = function(name){
    this.name = name;
}

Person.prototype.get_name = function(){
    return this.name;
}

const zhs = new Person("zhangsan");
console.log(zhs.get_name());

const lis = new Person("lisi");
console.log(lis.get_name());

const wwu = new Person("wangwu");
console.log(wwu.get_name());