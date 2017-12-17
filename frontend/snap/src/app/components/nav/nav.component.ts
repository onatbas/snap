import { Component } from "@angular/core";
import { DatasetService } from "../../services/dataset/DatasetService";
import { EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
import { Output } from "@angular/core";

@Component({
    selector: "snapnav",
    templateUrl: "./nav.component.html",
    styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
    constructor(
        private datasetService: DatasetService
    ) { }

    private datasetPerPage: number = 10;
    private currentPage = 0;

    private pages: number[] = [];

    ngOnInit() {
        this.datasetService.getDatacount().then((count) => {

            var pageCount = count / this.datasetPerPage;

            for (var i = 0; i < pageCount; i++) {
                this.pages.push(i);
            }
        });
    }

    @Output()
    private pageChange: EventEmitter<number> = new EventEmitter<number>();

    onPageClick(pageNumber) {
        this.currentPage = (pageNumber >= this.pages.length - 1 ? this.pages.length - 1 :
            (pageNumber <= 0 ? 0 : pageNumber));

        this.pageChange.emit(pageNumber);
    }


}