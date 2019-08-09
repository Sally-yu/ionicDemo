import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UrlService} from '../../../url.service';

@Component({
    selector: 'app-demo1',
    templateUrl: './demo1.page.html',
    styleUrls: ['./demo1.page.scss'],
})
export class Demo1Page implements OnInit {

    source: any = {
        datatype: 'json',
        datafields: [
            {name: 'number', type: 'int'},
            {name: 'code', type: 'string'},
            {name: 'name', type: 'string'},
        ],
        id: 'id',
        url: this.url.demo1grid,
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        {text: '序号', datafield: 'number',align:'center',cellsalign:'center'},
        {text: '文档编号', datafield: 'code',align:'center',cellsalign:'center'},
        {text: '文档名称', datafield: 'name',align:'center',cellsalign:'center'}
    ];

    constructor(
        private nav: NavController,
        private url:UrlService,
    ) {
    }

    ngOnInit() {
    }


    ionViewWillEnter() {
    }

}
