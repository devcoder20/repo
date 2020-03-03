import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful/contentful.service';

@Component({
  selector: 'app-contetful-common',
  templateUrl: './contetful-common.component.html',
  styleUrls: ['./contetful-common.component.scss']
})
export class ContetfulCommonComponent implements OnInit {
  contents: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.contentfulService
      .getContents()
      .then(contents => (this.contents = contents));
  }

  goToContetsDetailPage(contentId) {
    this.router.navigate(['/contentful', contentId]);
  }
}
