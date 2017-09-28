import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['zh','en', 'fr', 'ur', 'es', 'it', 'fa']);
        translate.setDefaultLang('zh');
        const browserLang = translate.getBrowserLang();
        console.log("lang=",browserLang);
        translate.use(browserLang.match(/zh|en|fr|ur|es|it|fa/) ? browserLang : 'en');
    }
}
