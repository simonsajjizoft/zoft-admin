import { Component,ViewChild,SimpleChanges, OnInit, OnChanges, ChangeDetectorRef} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import {TableService} from '../../services/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.scss']
})
export class ListingpageComponent implements OnInit,OnChanges{
  selection = new SelectionModel<any>(true, []);
  dataSource: any;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);
  pageSizeperPage:any;
  data:any ;
  shownColumns:any = ['select','Title','Author','Publishing Date','Tags','Visibility','edit','view'];
  isFilterActive:any;
  filteredColumns: any = [];
  enabledAddressFilter: boolean = true;
  enabledLocationNameFilter: boolean = true;
  enabledAddressLine1Filter: boolean = true;
  enabledRouteFilter: boolean = true;
  enabledOnRouteFilter: boolean = true;
  orderedColumns: any;
  masterCheckbox: boolean = false;
  pgIndex: any = 0;
  @ViewChild('filterName') filterName: any;

  @ViewChild('matpaginatr') paginator: MatPaginator | any;

  constructor(private tableService:TableService, private cdr: ChangeDetectorRef,){}

  ngOnInit(){
    this.pageSizeperPage = 10;
    this.data = [
      {'Title':'How to develop UI','Author' : 'Krish Naik','Publishing Date':'21/02/23','Tags':' AI, ML','Visibility':'Public','edit':true,view:true},
      {'Title':'Object Detection','Author' : 'Jim Paterson','Publishing Date':'21/02/23','Tags':' AI, ML, Deep Learning','Visibility':'Private'},
      {'Title':'How to develop UI','Author' : 'Krish Naik','Publishing Date':'21/02/23','Tags':' AI, ML','Visibility':'Public'},
      {'Title':'How to develop UI','Author' : 'Krish Naik','Publishing Date':'21/02/23','Tags':' AI, ML','Visibility':'Public'},
      {'Title':'How to develop UI','Author' : 'Krish Naik','Publishing Date':'21/02/23','Tags':' AI, ML','Visibility':'Private'},
    ];
  
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selection = this.tableService.getSelectionModel();

  }

  getPageData() {
    return this.dataSource._pageData(this.dataSource._orderData(this.dataSource.filteredData));
  }

  isEntirePageSelected() {
    return this.getPageData().every((row: any) => this.selection.isSelected(row));
  }

  masterToggle(checkboxChange: MatCheckboxChange) {
    this.isEntirePageSelected() ?
      this.selection.deselect(...this.getPageData()) :
      this.selection.select(...this.getPageData());
  }

  selectaRow(row: any, ev: any) {
    if (ev?.checked) this.tableService.select(row);
    else this.tableService.deselect(row);
  }

  applyFilter(filterValue: any, column: any) {
    this.selection.deselect(...this.getPageData())  // needs to clear the checked locations before filtering
    if (filterValue.target?.value == '') {
      this.isFilterActive = false;
      this.filteredColumns.map((item: any, idx: any) => {
        if (item == column) this.filteredColumns.splice(idx, 1)
      });
      this.clearAllFilters();
      this.tableService.clearSelectionModel();
    }
    else {
      if (column == 'Title') {
        this.enabledRouteFilter = false;
        this.enabledAddressLine1Filter = false;
        this.enabledLocationNameFilter = true;
      }
    

      this.isFilterActive = true;
      this.filteredColumns.push(column);
      this.dataSource.filterPredicate = function (data: any, filter: string): any {
        if (column == 'Title') return data?.Title?.toLowerCase().includes(filter);

      };
      if (filterValue?.target?.value) filterValue = filterValue.target?.value?.trim().toLowerCase();
      else filterValue = filterValue;
      this.dataSource.filter = filterValue;
      this.cdr.detectChanges();
    }
  }

  clearAllFilters() {
    this.applyFilter('', '');
    this.enabledLocationNameFilter = true;
    if (this.filterName?.nativeElement) this.filterName.nativeElement.value = '';

    this.isFilterActive = false;
  }

  onChangedPage(event: any) {
    this.pageSizeperPage = event?.pageSize;
    this.masterCheckbox = false;
  
  
  }

 

}
