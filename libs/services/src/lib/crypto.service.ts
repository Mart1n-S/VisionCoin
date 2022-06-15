import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Asset, Balance } from '@finastra/api-interfaces';
import { NODE_RED_URL, PROXY_URL } from '@finastra/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(
    private http: HttpClient,
    @Inject(PROXY_URL) protected proxyUrl: string,
    @Inject(NODE_RED_URL) protected nodeRedUrl: string
  ) {}

  getBalance(): Observable<Balance> {
    return this.get<Balance>(`/balance`);
  }

  getAssets(): Observable<Asset[]> {
    return this.get<Asset[]>(`/assets`);
  }

  getTrendings(): Observable<Asset[]> {
    return this.get<Asset[]>(`/trendings`);
  }

  getWatchlist(): Observable<Asset[]> {
    return this.get<Asset[]>(`/watchlist`);
  }

  private get<T>(target: string) {
    return this.http.get<T>(this.proxyUrl, {
      params: {
        serviceId: this.nodeRedUrl,
        target,
      },
    });
  }
}
