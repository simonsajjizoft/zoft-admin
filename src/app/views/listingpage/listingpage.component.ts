import { Component,ViewChild,SimpleChanges, OnInit, OnChanges, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import {TableService} from '../../services/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.scss']
})
export class ListingpageComponent implements OnInit,OnChanges,AfterViewInit{
  selection = new SelectionModel<any>(true, []);
  dataSource: any;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);
  pageSizeperPage:any;
  data:any ;
  shownColumns:any = ['select','Title','Author','Published By','Published Date','Last Updated','Tags','Status','edit'];
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
  showBlogContent:Boolean = false;
  blogContent:any;
  @ViewChild('filterName') filterName: any;

  @ViewChild('matpaginatr') paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private tableService:TableService, private cdr: ChangeDetectorRef,private router:Router){}

  ngOnInit(){
    this.pageSizeperPage = 10;
    this.data = [
      {'Title':'How to develop UI','Author' : 'Krish Naik','Published By':'Krish Naik','Published Date':'21-Feb-23','Last Updated': '24-Feb-23', 'Tags':' AI, ML','Visibility':'Public','Status':'Published'},
      {'Title':'Object Detection','Author' : 'Jim Paterson','Published By':'Krish Naik','Published Date':'21-Feb-23','Last Updated': '25-Feb-23','Tags':' AI, ML, Deep Learning','Visibility':'Private','Status':'Draft'},
      {'Title':'Distill','Author' : 'Shan Carter','Published By':'Krish Naik','Published Date':'21-Mar-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Public','Status':'Draft'},
      {'Title':'Machine Learning Mastery','Author' : 'Jason Brownlee','Published By':'Krish Naik','Published Date':'21-Feb-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Public','Status':'Draft'},
      {'Title':'The need for ChatGPT','Author' : 'Elon Musk','Published By':'Krish Naik','Published Date':'08-Feb-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Public','Status':'Published'},
      {'Title':'Machine Learning is Fun','Author' : 'Adam Geitgey','Published By':'Krish Naik','Published Date':'05-Feb-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Public','Status':'Draft'},
      {'Title':'AWS Machine Learning Blog','Author' : 'Krish Naik','Published By':'Krish Naik','Published Date':'12-Aug-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Public','Status':'Draft'},
      {'Title':'FastML','Author' : 'Zygmunt Zając','Published By':'Krish Naik','Published Date':'21-Sep-23','Last Updated': '21-Feb-23','Tags':' AI, ML','Visibility':'Private','Status':'Draft'},
    ];
  
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cdr.detectChanges();
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

  filterByStatus(column:any,status:String){
    this.selection.deselect(...this.getPageData());
    if(status == 'All') this.clearStatusFilters();
    else this.dataSource.filter = status;
    this.cdr.detectChanges();

  }

  clearStatusFilters(){
      this.dataSource.filter = '';
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

  previewBlog(blogDetails:any){
    this.showBlogContent = true;
    this.blogContent = `<div style="align-items:'center';justify-content:'center'"><h3 style="text-align:center;color:blue">${blogDetails?.Title}</h3> <p>This is sample Blog </p> </div>`

  }

  getBlogContent(){
    return this.blogContent;
  }

  openContentInNewWindow(content:any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/custompage/${content.id}`])
    );
    window.open(url, '_blank');
  }

  gotToEditingPage(id:any,content:any){
    this.router.navigate(
      ['/editingpage'],
      { queryParams: { id: id, content: content} }
    );

  }

 

}
