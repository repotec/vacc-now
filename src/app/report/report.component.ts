import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'report-component',
    templateUrl : './report.component.html'
})

export class ReportComponent{
    serverName = 'test';

    onUpdateInput(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}

