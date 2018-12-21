import { FormNavComponent } from './form-nav.component';
import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormNavService } from '../services/form-nav.service';
import { FormNavModule } from '../nav-app';
import { By } from "@angular/platform-browser";


describe('FormNavComponent', () => {
    let component: FormNavComponent;
    let fixture: ComponentFixture<FormNavComponent>;
    let formNavService: FormNavService;
    let groups = [{ hidden: false, label: 'test1', fields: ["f1", "f2"] },
                  { label:"panelItem", panels: [{hidden: false, label: 'test1', fields: ["f3", "f4"]} ] },
                  { hidden: false, label: 'test2' },
                  { hidden: false, label: 'test3' }];
    let selectionArray = ["f1", "f2", "f3"];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                FormNavModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormNavComponent);
        component = fixture.componentInstance;
        formNavService = TestBed.get(FormNavService);
        groups.forEach(g => formNavService.add(g));
        component.items = groups;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should render number of links equal to number of groups', () => {
        let links = fixture.debugElement.queryAll(By.css('a'));
        expect(links.length).toEqual(groups.length);
    });

    it('should call service.reset', () => {
        spyOn(formNavService, 'reset');
        fixture.destroy();
        expect(formNavService.reset).toHaveBeenCalled();
    });

    it('should set status correctly for items', () => {
      component.selectionArray = selectionArray;
      component.items.forEach(item => component.statusValidationCheck(item));

      expect(component.items[0].isValid).toBeTruthy();
      expect(component.items[1].isValid).toBeFalsy();
    });

});
