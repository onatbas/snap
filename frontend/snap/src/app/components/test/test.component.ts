import { Component } from "@angular/core";
import { DatasetService } from "../../services/dataset/DatasetService";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Dataset } from "../../services/dataset/Dataset";

@Component({
    selector: "test",
    styleUrls: [ "./test.component.css" ],
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit
{
    constructor(
        private datasetService: DatasetService
    ){}

    public datasets: Dataset[] = [];


    ngOnInit(): void{
        this.datasetService.getDatabyPage(0, 10).then((datasets:Dataset[])=>{
            this.datasets = datasets;
        });
    }
}