import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

declare global {
  interface Window {
    env: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = `${window.env.BOOK_BACK_URL}/book`;

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookByUserId(userId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/${userId}`);
  }

  notGet(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/notget`);
  }

  reserve(bookId: number, userId: number) {
    return this.http.post(`${this.apiUrl}/reserve/${bookId}/${userId}`, {});
  }
}
