import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Dataset } from "../../../services/dataset/Dataset";

declare var $: any
@Component({
    selector: "[listitem]",
    templateUrl: "./listitem.component.html",
    styleUrls: [ "./listitem.component.css" ]
})
export class ListItemComponent
{
    constructor(
    ){
        $('.modal').modal();
    }
    @Input() dataset: Dataset;
}