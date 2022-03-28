import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {


  constructor(public messageService: MessageService){}

  ngOnInit(): void {
    
  }

}
