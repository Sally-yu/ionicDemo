import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UrlService} from '../../../url.service';

@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.page.html',
    styleUrls: ['./demo3.page.scss'],
})
export class Demo3Page implements OnInit {

    source: any = {
        datatype: 'json',
        datafields: [
            {name: 'key', type: 'string'},
            {name: 'value', type: 'string'},
        ],
        id: 'id',
        url: this.url.demo3source,
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns: any[] = [
        {text: 'key', datafield: 'key', align: 'center', cellsalign: 'center'},
        {text: 'value', datafield: 'value', align: 'center', cellsalign: 'center'},
    ];

    constructor(
        private nav: NavController,
        private url: UrlService
    ) {
    }

    ngOnInit() {
    }

}
