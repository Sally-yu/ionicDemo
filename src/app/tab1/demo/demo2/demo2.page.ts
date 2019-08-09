import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-demo2',
    templateUrl: './demo2.page.html',
    styleUrls: ['./demo2.page.scss'],
})
export class Demo2Page implements OnInit {

    forms = [
        {
            label: '项目名称',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '轮批次',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '产品编号',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '产品名称',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '工序号',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '工序名称',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        }, {
            label: '数量',
            field: '',
            type: 'number',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '计划完成日期',
            field: '',
            type: 'date',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '完成数量',
            field: '',
            type: 'number',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '完成日期',
            field: '',
            type: 'date',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '加工设备',
            field: '',
            type: 'option',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '自检人',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '检验值',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '自检日期',
            field: '',
            type: 'date',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '互检人',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '互检日期',
            field: '',
            type: 'date',
            default: '',
            placeholder: '',
            required: false,
        },{
            label: '备注',
            field: '',
            type: 'text',
            default: '',
            placeholder: '',
            required: false,
        },
    ];

    constructor(
        private nav: NavController,
    ) {
    }

    ngOnInit() {
    }


}
