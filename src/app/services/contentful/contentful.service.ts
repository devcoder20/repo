import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() {}

  getContents(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'content'
          },
          query
        )
      )
      .then(res => res.items);
  }

  getContent(contentId): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'content'
          },
          { 'sys.id': contentId }
        )
      )
      .then(res => res.items[0]);
  }
}
