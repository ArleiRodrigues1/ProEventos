import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { Constants } from '../util/Constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}