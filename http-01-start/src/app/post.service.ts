import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable()

export class PostService{
    error = new Subject<string>();
    constructor(private http: HttpClient){}

    createAndStorePosts(title:string, content: string){
        const postData: Post = {title: title, content: content}
         this.http
        .post<{name: string}>(
          'https://angular---udemy.firebaseio.com/posts.json',postData,{

          }).subscribe(responseData=>{
              console.log(responseData)}, error=>{this.error.next(error.message)}
          )
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty')
        return this.http.get<{[key: string]: Post}>('https://angular---udemy.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header': 'Hello'}),
            params: searchParams
        })
    .pipe(map((responseData)=>{
      const postArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key], id: key})
        }
      }
      return postArray;
    }), catchError(errorRes=>{
        return throwError(errorRes)
    }))
    }

    deletePost(){
        return this.http.delete('https://angular---udemy.firebaseio.com/posts.json',
        {observe:'events', responseType:'json'})
    }
}