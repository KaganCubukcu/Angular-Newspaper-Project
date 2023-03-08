import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixDate',
})
export class FixDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value.replace('T', ' ').replace('Z', ''));
    const day = date.getDate().toString().padStart(2, '0');
    const month = this.getMonthName(date.getMonth());
    const year = date.getFullYear();
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const dayOfWeek = this.getDayName(date.getDay());
    return `${day} ${month} ${year} ${dayOfWeek} ${time}`;
  }

  private getMonthName(month: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months[month];
  }

  private getDayName(day: number): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
  }
}
