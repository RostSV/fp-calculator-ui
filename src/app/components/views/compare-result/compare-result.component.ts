import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {compare_result} from "../../../interfaces/data";

@Component({
  selector: 'app-compare-result',
  templateUrl: './compare-result.component.html'
})
export class CompareResultComponent implements OnInit{
  data = compare_result;
  files: File[] = [];

  constructor(){}

  ngOnInit(): void {
    console.info(this.data);
  }
}
