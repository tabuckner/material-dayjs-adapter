# MaterialDayjsAdapter

An adapter to use [Dayjs]() instead of [MomentJS]() in an effort to [reduce dependency size](#dependency-size-reduction). Feel free to create an issue or submit a PR.

If coming from [@angular/material-moment-adapter](https://github.com/angular/components/tree/master/src/material-moment-adapter), using the default locale and UTC plugins you can reduce your dependency size by *~560kb*

Heavily inspired by [@angular/material-moment-adapter](https://github.com/angular/components/tree/master/src/material-moment-adapter) [NPM](https://www.npmjs.com/package/@angular/material-moment-adapter).

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Dependency Size Reduction
MomentJS comes bundled with a lot of stuff that you may not need--for instance, locales. If you find that MaterialDayJsAdapter suits your needs well, you could see some substantial size cost savings. In most situations you will see a reduction of ~560kb in webpack-bundle-analyzer.

### An Example Project
Using a brand new app generated with the [@angular/cli](https://www.npmjs.com/package/@angular/cli), an app was set up using both MomentJS Date Adapter and Dayjs Date Adapter. Production build statics were then analyzed with [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer).

#### Stats
| Chunk Name                    | MomentJS | Dayjs   | Size Reduction |
| ----------------------------- | :------: | :-----: | -------------: |
| chunk {0} runtime-es2015.js   | 1.45 kB  | 1.45 kB |             0% |
| chunk {0} runtime-es5.js      | 1.45 kB  | 1.45 kB |             0% |
| chunk {1} main-es2015.js      | 775 kB   | 42 kB   |            **43%** |
| chunk {1} main-es5.js         | 838 kB   | 505 kB  |            **40%** |
| chunk {2} polyfills-es2015.js | 36.4 kB  | 36.4 kB |             0% |
| chunk {3} polyfills-es5.js    | 123 kB   | 123 kB  |             0% |
| chunk {4} styles.css          | 62.7 kB  | 62.7 kB |             0% |

#### MomentJS
Minimal Project with MomentJS Date Adapter
![momentjs date adapter bundle size analyzer graph](https://i.imgur.com/5ybvzbS.png)
![momentjs cli stats](https://i.imgur.com/jwkUbrd.png)

#### Dayjs
Minimal Project with Dayjs Date Adapter
![dayjs date adapter bundle size analyzer graph](https://i.imgur.com/F26dh4O.png)
![dayjs cli stats](https://i.imgur.com/VAiQFCM.png)


## How To Use
### Import Module
```typescript
import { MatDayjsDateModule } from '@tabuckner/material-dayjs-adapter';

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

### Localization
Import the locales you need from DayJS and set the current locale 
1. Globally for DayJS
2. To the Date Adapter itself
For example in your AppComponent:
```typescript
import { DateAdapter } from '@angular/material';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/nl';
...
export class AppComponent {
  constructor(private dateAdapter: DateAdapter<Dayjs>) { 
    this.setLocale('nl');
  }

  setLocale(locale: string) {
    dayjs.locale(locale);
    this.dateAdapter.setLocale(locale);
  }
...
```

### Optionally Provide A Configuration
```typescript
import { MatDayjsDateModule, MAT_DAYJS_DATE_ADAPTER_OPTIONS } from '@tabuckner/material-dayjs-adapter';
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
