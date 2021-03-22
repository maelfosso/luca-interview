import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Publication } from '../_models/publication';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

  publicationForm = new FormGroup({
    title: new FormControl(''),
    publication: new FormControl(''),
  });

  constructor(
    private publicationService: PublicationService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.publicationForm.value);

    this.publicationService.addPublication(this.publicationForm.value as Publication)
    .subscribe(publication => {
      this.location.back();
    });
  }

}
