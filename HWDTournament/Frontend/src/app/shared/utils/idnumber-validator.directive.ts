    import { Directive, forwardRef,  Attribute } from   '@angular/core';    
    import { Validator, AbstractControl, NG_VALIDATORS } from   '@angular/forms';     
    
    @Directive({    
    selector: '[validateIDNumber][formControlName],[validateIDNumber][formControl],[validateIDNumber][ngModel]',    
    providers: [ { provide: NG_VALIDATORS, useExisting:   forwardRef(() =>  IDNumberValidator), multi:  true }         ]    
    })
    
    export class  IDNumberValidator    implements Validator {    

        constructor( @Attribute('validateIDNumber')
            public validateIDNumber:  string,    
            @Attribute('reverse')
        public reverse: string) {    
        }  
        
        private get  isReverse() {    
            if (!this.reverse)
                return false;
            
            return this.reverse === 'true' ? true : false;    
        }

        validate(c: AbstractControl): { [key: string]: any } {        
            // self value    
            let v = c.value;  
            // control vlaue
            
            
            // let e = c.root.get(this.validateIDNumber);  

            // // value not equal    
            // if (e &&  v !== e.value && !this.isReverse) {    
            //     return {    validateIDNumber: false   }    
            // }
            
            // // value equal and reverse
            
            // if (e &&  v === e.value && this.isReverse) {    
            //     delete e.errors['validateIDNumber'];    
            // if (!Object.keys(e.errors).length)
            //     e.setErrors(null);        
            // }
            
            // // value not equal and reverse
            
            // if (e &&   v !== e.value &&  this.isReverse) {    
            //     e.setErrors({ validateIDNumber: false });    
            // }   
            
            return null;
        
        }        
    }
    