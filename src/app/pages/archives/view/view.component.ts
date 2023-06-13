import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  archive: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);

      // Panggil metode getArchiveById dengan ID yang diterima
      // this.getArchiveById(id);
    });

    this.archive = history.state.archive;
    console.log(this.archive);
  }

  getArchiveById(id: string) {
    // Implementasikan logika untuk mencari data arsip berdasarkan ID
    // Misalnya, dapatkan data dari layanan atau penyimpanan data
    // Contoh sederhana:
    // const archive = archives.find((archive: { id: number }) => archive.id === +id);
    // this.archive = archive;
  }

}
