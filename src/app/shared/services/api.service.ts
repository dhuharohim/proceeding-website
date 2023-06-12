import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  async getData(data: string) {
    if(data == 'Journal data') {
      const res = await axios.get(`${environment.apiUrl}/v3.1/all`, {
        headers: {
          'content-type': 'text/json'
        }
      })
      return res;
    } else {
      // Jika kondisi data tidak terpenuhi, tambahkan pengembalian nilai default di sini
      return null;
    }
  }
}
