import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Dataset } from "../../services/dataset/Dataset";

@Component({
    selector: "list",
    templateUrl: "./list.component.html",
    styleUrls: [ "./list.component.css" ]
})
export class ListComponent
{
    @Input() datasets: Dataset[];
}