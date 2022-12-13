import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const apiURL = environment.apiUrl;


@Injectable()

export class AppInterceptor implements HttpInterceptor{
    
    constructor(){
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith("/api")){
            req = req.clone({url: req.url.replace("/api", apiURL), withCredentials: true})            
        }
        
        return next.handle(req);
    };

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}