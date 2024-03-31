import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  faFileArchive = faFilePdf;
  constructor() { }

  ngOnInit(): void {
  }

}
