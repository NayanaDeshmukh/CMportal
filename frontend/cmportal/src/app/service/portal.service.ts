import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { employee } from '../model/portal';
const API_URL = 'http://localhost:3000/api/test/';
const AUTH_API = 'http://localhost:3000/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  baseUri:string = 'http://localhost:3000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // Create Company
   createcompany(data: any): Observable<any> {
    let url = `${this.baseUri}/company`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // Get all companies
  getcompanies() {
    return this.http.get(`${this.baseUri}/company`);
  }
  
  // Get company
  getcompany(id: any): Observable<any> {
    let url = `${this.baseUri}/company/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  // Update company
updatecompany(id: any, data: any): Observable<any> {
  let url = `${this.baseUri}/company/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete company
deletecompany(id: any): Observable<any> {
  let url = `${this.baseUri}/company/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

 // Create employee
createemployee(data: any): Observable<any> {
  let url = `${this.baseUri}/employee`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}
// Get all employee
getemployees() {
  return this.http.get(`${this.baseUri}/employee`);
}

// Get employee
getemployee(id: any): Observable<any> {
  let url = `${this.baseUri}/employee/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}
// Update employee
updateemployee(id: any, data: any): Observable<any> {
let url = `${this.baseUri}/employee/${id}`;
return this.http.put(url, data, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}

// Delete employee
deleteemployee(id: any): Observable<any> {
let url = `${this.baseUri}/employee/${id}`;
return this.http.delete(url, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}

// Create User
createuser(data: any): Observable<any> {
  let url = `${this.baseUri}/user`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

// Get all User
getusers() {
  return this.http.get(`${this.baseUri}/user`);
}

// Get User
getuser(id: any): Observable<any> {
  let url = `${this.baseUri}/user/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}
// Update User
updateuser(id: any, data: any): Observable<any> {
let url = `${this.baseUri}/user/${id}`;
return this.http.put(url, data, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}

// Delete User
deleteuser(id: any): Observable<any> {
let url = `${this.baseUri}/user/${id}`;
return this.http.delete(url, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}

// Create Blog
createblog(data: any): Observable<any> {
  let url = `${this.baseUri}/blog`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}
// Get all Blogs
getblogs() {
  return this.http.get(`${this.baseUri}/blog`);
}
findblogByContain(searchVal: any): Observable<any> {
  let url = `${this.baseUri}/blogsearch/${searchVal}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}
// Get all Blogs by username
getblogsByUsername(wby: any): Observable<any> {
  let url = `${this.baseUri}/blogs/${wby}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}
// Get blog
getblog(id: any): Observable<any> {
  let url = `${this.baseUri}/blog/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}
// Update blog
updateblog(id: any, data: any): Observable<any> {
let url = `${this.baseUri}/blog/${id}`;
return this.http.put(url, data, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}
// Delete User
deleteblog(id: any): Observable<any> {
let url = `${this.baseUri}/blog/${id}`;
return this.http.delete(url, { headers: this.headers }).pipe(
  catchError(this.errorMgmt)
)
}
 // Create contact query
createquery(data: any): Observable<any> {
  let url = `${this.baseUri}/query`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}
// Get all contact query
getqueries() {
  return this.http.get(`${this.baseUri}/query`);
}
// Get contact query
getquery(id: any): Observable<any> {
  let url = `${this.baseUri}/query/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

  // Error handling 
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}


//auth.service.ts
login(data:any): Observable<any> {
  return this.http.post(AUTH_API + 'signin', data)
  // let url = `${this.baseUri}/query`;
  // return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}
// register(username: string, email: string, password: string): Observable<any> {
//   return this.http.post(AUTH_API + 'signup', {
//     username,
//     email,
//     password
//   }, httpOptions);
// }
register(data:any): Observable<any> {
  return this.http.post(AUTH_API + 'signup', data)
  .pipe(
    catchError(this.errorMgmt)
  )
}

//user.service.ts
getPublicContent(): Observable<any> {
  return this.http.get(API_URL + 'all', { responseType: 'text' });
}
getUserBoard(): Observable<any> {
  return this.http.get(API_URL + 'user', { responseType: 'text' });
}
getModeratorBoard(): Observable<any> {
  return this.http.get(API_URL + 'mod', { responseType: 'text' });
}
getAdminBoard(): Observable<any> {
  return this.http.get(API_URL + 'admin', { responseType: 'text' });
}

}