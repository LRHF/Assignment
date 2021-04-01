import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISurvey } from '../interface/survey.interface';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {

    private baseUrlSurveys = '/api/surveys.js';

    constructor (private http: HttpClient){ }

    getSurveys(): Observable<ISurvey[]> {
        return this.http.get<ISurvey[]>(this.baseUrlSurveys);
        
    }

}