import { Component } from "@angular/core";
import { DatasetService } from "../../services/dataset/DatasetService";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Dataset } from "../../services/dataset/Dataset";
import { Input } from "@angular/core";

declare var $: any

@Component({
    selector: "test",
    styleUrls: [ "./test.component.css" ],
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit
{
    constructor(
        private datasetService: DatasetService
    ){
        $('.modal').modal();

    }

    @Input() public search: string;
    public datasets: Dataset[] = [];


    ngOnInit(): void{
        this.pageChange(0);
    }

    pageChange(pageNumber:number){
        this.datasetService.getDatabyPage(pageNumber, 10).then((datasets:Dataset[])=>{
            this.datasets = datasets;
        });
    }


    onSearchChange(){
        var currString = this.search;
  
        setTimeout(()=>{
          var newString = this.search;
          if (newString === currString) // The input havent changed
              this.searchFor(currString);
        }, 500);
    }
  
  
    searchFor(searchString){
        if (searchString.length <= 3)
        {
            this.pageChange(0);
        }else{
        this.datasetService.searchFor(searchString).then((listories:Dataset[])=>{
            console.log(listories);
          this.datasets = listories;
        });
      }
    }

    

}