import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static invaildProjectName(control: FormControl): {[s: string]: boolean} {
        if(control.value ==='test')
        {
            return {'inavlidProjectName': true};
        }
        return null;
    }

    static asyncInvaildProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value ==='testproject')
                {
                    resolve({'inavlidProjectName': true});
                } 
                resolve(null);
            },1500)
        });
        return promise;
    }
}