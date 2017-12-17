import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Dataset } from "../../services/dataset/Dataset";


@Component({
    selector: "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent
{
    @Input() dataset: Dataset;
}