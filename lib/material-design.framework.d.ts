import { Framework } from '@zajsf/core';
import { FlexLayoutRootComponent, FlexLayoutSectionComponent, MaterialAddReferenceComponent, MaterialButtonComponent, MaterialButtonGroupComponent, MaterialCheckboxComponent, MaterialCheckboxesComponent, MaterialChipListComponent, MaterialDatepickerComponent, MaterialDesignFrameworkComponent, MaterialFileComponent, MaterialInputComponent, MaterialNumberComponent, MaterialOneOfComponent, MaterialRadiosComponent, MaterialSelectComponent, MaterialSliderComponent, MaterialStepperComponent, MaterialTabsComponent, MaterialTextareaComponent } from './widgets/public_api';
import * as i0 from "@angular/core";
export declare class MaterialDesignFramework extends Framework {
    name: string;
    framework: typeof MaterialDesignFrameworkComponent;
    stylesheets: string[];
    widgets: {
        root: typeof FlexLayoutRootComponent;
        section: typeof FlexLayoutSectionComponent;
        $ref: typeof MaterialAddReferenceComponent;
        button: typeof MaterialButtonComponent;
        'button-group': typeof MaterialButtonGroupComponent;
        checkbox: typeof MaterialCheckboxComponent;
        checkboxes: typeof MaterialCheckboxesComponent;
        'chip-list': typeof MaterialChipListComponent;
        date: typeof MaterialDatepickerComponent;
        file: typeof MaterialFileComponent;
        number: typeof MaterialNumberComponent;
        'one-of': typeof MaterialOneOfComponent;
        radios: typeof MaterialRadiosComponent;
        select: typeof MaterialSelectComponent;
        slider: typeof MaterialSliderComponent;
        stepper: typeof MaterialStepperComponent;
        tabs: typeof MaterialTabsComponent;
        text: typeof MaterialInputComponent;
        textarea: typeof MaterialTextareaComponent;
        'alt-date': string;
        'any-of': string;
        card: string;
        color: string;
        'expansion-panel': string;
        hidden: string;
        image: string;
        integer: string;
        radiobuttons: string;
        range: string;
        submit: string;
        tagsinput: string;
        wizard: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialDesignFramework, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaterialDesignFramework>;
}
