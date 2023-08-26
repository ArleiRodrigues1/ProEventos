import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { Constants } from '../util/Constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any): any {

    if (typeof value !== 'string') {
    return value;
  }
      let month = value.substring(0,2);
      let day = value.substring(3,5);
      let year = value.substring(6, 10);
      let hour = value.substring(11, 13);
      let minutes = value.substring(14, 16);
      value = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes;

      return super.transform(value, Constants.DATE_TIME_FMT);
    }
  }