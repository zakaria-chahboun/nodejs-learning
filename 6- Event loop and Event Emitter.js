/*
Events up server :: Event loop and Event Emitter
*/

var event=require('events');// load events class
var eventemit=new event.EventEmitter(); // object of event :: contanit group of events :: like brodcats

eventemit.on('doSomeThing',function(){// define event name for example : "doSomeThing"
	console.log("i'm chatting with sarra now!");
});

eventemit.addListener('doSomeThing',function(){// we can add more actions on the same event name : "doSomeThing"
	console.log("i want to sleep 1.");
});
eventemit.addListener('doSomeThing',function(){// we can add more actions on the same event name : "doSomeThing"
	console.log("i want to sleep 2.");
	eventemit.emit('sleep');// calle "sleep" event
});

eventemit.on('sleep',function(){// add second event "sleep"
	console.log("Hi! i'm going to bed!");
});

// emit is used to fire an event :: "play methods"
eventemit.emit('doSomeThing');// name of event
