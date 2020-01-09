import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent implements OnInit{

    isDirty:boolean = true;
    newEvent
    event: any;

    constructor(private router: Router, private eventService: EventService){}

    ngOnInit(){
        this.event = {
            name: 'UI Event',
            date: '9/9/2020',
            time: '10am',
            price: 999.99,
            location: {
                address: '456 happy St',
                city: 'London',
                country: 'UK'
            },
            onlineUrl: 'http://google.com',
            imageUrl: 'http://google.com/cat.png'
        }
    }

    saveEvent(formValues){
        // console.log(formValues)
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events']);
    }

    cancel(){
        this.router.navigate(['/events']);
    }

}