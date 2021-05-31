import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;


  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    this.http.get<any>('https://api.npoint.io/aba0bbc3361bfc50d277').subscribe((d: any) => (this.Blogs = d));;
    return this.http.get<any>('https://api.npoint.io/aba0bbc3361bfc50d277');
  }


  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginStatusService = true;
    }
  }
}
