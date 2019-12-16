# MaterialDayjsAdapter

An adapter to use [Dayjs]() instead of [MomentJS]() in an effort to reduce dependency size. Currently only supports the default locale as this is all I needed for my implementation. Feel free to create an issue or submit a PR if you would like to see support for other Dayjs locales/plugins added.

If coming from [@angular/material-moment-adapter](https://github.com/angular/components/tree/master/src/material-moment-adapter), using the default locale and UTC plugins you can reduce your dependency size by *~560kb*

Pictures

Heavily inspired by [@angular/material-moment-adapter](https://github.com/angular/components/tree/master/src/material-moment-adapter) [NPM](https://www.npmjs.com/package/@angular/material-moment-adapter).

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## How To Use
### Import Module
```typescript
import { MatDayjsDateModule } from 'material-dayjs-adapter';

@NgModule({
 ...
  imports: [
    ...
    MatDatepickerModule,
    MatDayjsDateModule,
    ...
  ],
  ...
})
export class AppModule { }
```

### Optionally Provide A Configuration
```typescript
import { MatDayjsDateModule, MAT_DAYJS_DATE_ADAPTER_OPTIONS } from 'material-dayjs-adapter';
@NgModule({
  ...
  providers: [
    { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  ...
})
export class AppModule { }
```

#### Currently Supported Options
```typescript
export interface DayJsDateAdapterOptions {
  /**
   * Turns the use of utc dates on or off.
   * Changing this will change how Angular Material components like DatePicker output dates.
   * {@default false}
   */
  useUtc?: boolean;
}
```

## Development
### Code scaffolding

Run `ng generate component component-name --project material-dayjs-adapter` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project material-dayjs-adapter`.
> Note: Don't forget to add `--project material-dayjs-adapter` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build material-dayjs-adapter` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build material-dayjs-adapter`, go to the dist folder `cd dist/material-dayjs-adapter` and run `npm publish`.

### Running unit tests

Run `ng test material-dayjs-adapter` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
