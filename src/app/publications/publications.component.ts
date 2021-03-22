import { Component, OnInit } from '@angular/core';

import { Publication } from '../_models/publication';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[];

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications()
      .subscribe(publications => this.publications = publications);
  }

}
