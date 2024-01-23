import Emitter from 'node:events'
import {Events} from "./event";

interface EventEmitter<T extends Events> {
    emit<EventName extends keyof T>(
        eventName: EventName,
        eventData: T[EventName]
    )
}

abstract class BaseEventEmitter<T extends Events> implements EventEmitter<T> {
    private readonly emitter: Emitter

    protected constructor() {
        this.emitter = new Emitter();
        this.addHandlers();
    }

    emit<EventName extends keyof T>(
        eventName: EventName,
        eventData: T[EventName]
    ) {
        this.emitter.emit(eventName as string, eventData)
    }

    on<EventName extends keyof T>(
        eventName: EventName, handler: (eventData: T[EventName]) => void
    ) {
        this.emitter.on(eventName as string, handler)
    }

    /**
     * The child class will need to implement this method to add handlers to the emitter.
     * e.g
     *   addHandlers(){
     *       this.on('event', (eventData)=>{
     *           ...
     *       })
     *   }
     */
    protected abstract addHandlers();
}


export {BaseEventEmitter, EventEmitter};
