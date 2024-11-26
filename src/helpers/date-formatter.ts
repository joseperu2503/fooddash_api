export class DateFormatter {
  static formatter = new Intl.DateTimeFormat('es-Es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  static format(date: Date): string {
    return DateFormatter.formatter.format(date);
  }
}
