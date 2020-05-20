//custom events
const EventEmitter = require('events')

//create EventEmitter
const event = new EventEmitter();

//subscribers
//on(nameofthevent,listener)
event.on('hello', function (evt) {
    console.log(evt);
});

//publisher
//send event,subcribers are notified
event.emit('hello', 'Hello Node');

//////////////////////////////////////////////////////////////////////////

//how to attache events to objects

class MessageService extends EventEmitter {
    constructor() {
        super();
        this.on('ondata', function (data) {
            console.log(data);
        });
        this.on('onerror', function (err) {
            console.log(err);
        });
    }
    sendMessage(message) {
        if (message) {
            this.emit('ondata', message)
        } else {
            this.emit('onerror', 'Something Went Wrong!!!!');
        }
    }
}
let service = new MessageService();
service.sendMessage('Product Received!');
service.sendMessage();

