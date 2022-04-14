import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.spinner.show();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKeyHeader,
    });

    const requestWithApiKeyHeader = request.clone({
      headers: headers,
    });

    return next
      .handle(requestWithApiKeyHeader)
      .pipe(
        catchError((err) => {
          this.spinner.hide();
          return err;
        })
      )
      .pipe(
        map((evt: any) => {
          if (evt instanceof HttpResponse) {
            this.spinner.hide();
          }
          return evt;
        })
      );
  }
}
