import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = null;


    @ViewChild(PlaceHolderDirective,{static: false}) alertHost: PlaceHolderDirective;

    private closeSub: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
        ) { }

    ngOnDestroy(): void {
        this.closeSub?.unsubscribe();
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const { email, password } = form.value;

        let authObservable: Observable<AuthResponseData>;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObservable = this.authService.login(email, password);
        }
        else {
            authObservable = this.authService.signUp(email, password);
        }

        authObservable.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes'])
        },
            errorMessage => {
                console.log(errorMessage);
                // this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
            }
        )
        form.reset();
    }

    showErrorAlert(errorMessage: string) {
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

       const componentRef =  hostViewContainerRef.createComponent(alertComponentFactory);
       componentRef.instance.message = errorMessage;
       this.closeSub = componentRef.instance.closed.subscribe(()=>{
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
       });
    }

    onHandleError(){
        this.error = null;
    }

}
