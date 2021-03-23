import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]),
    publication: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
    ]),
  });

  constructor(
    private publicationService: PublicationService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  get title() { return this.publicationForm.get('title'); }

  get publication() { return this.publicationForm.get('publication'); }

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
