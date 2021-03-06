import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pages=[
    {
      title:'Upcoming Duty',
      url:'/home/upcomingDuty'
    },
    {
      title:'Old Duty',
      url:'/home/oldDuty'
    },
    {
      title:'About',
      url:'/home/about'
    }
  ];

  selectedPath='';
  pagerefrsh: string;

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath=event.url;
    });
   }

  ngOnInit() {
    this.pagerefrsh = JSON.parse(localStorage.getItem('pagerefresh'));
    if(this.pagerefrsh == "0"){
      localStorage.setItem('pagerefresh', "1");
      location.reload();
    }
  }

}
