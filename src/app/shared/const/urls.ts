import { environment } from 'src/environments/environment';

export class URLS {
  public static getAllProducts(): string {
    return `${environment.serverUrl}/products`;
  }

  public static checkout(): string {
    return `${environment.serverUrl}/checkout`;
  }
}
