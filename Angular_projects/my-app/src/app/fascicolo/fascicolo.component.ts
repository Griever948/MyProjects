import { Component, OnInit, Input } from '@angular/core';
import { Documento } from '../documento';
import { Fascicolo } from '../fascicolo';
import { DocumentoService } from '../documento.service';
import { FascicoloService } from '../fascicolo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-fascicolo',
  templateUrl: './fascicolo.component.html',
  styleUrls: ['./fascicolo.component.css']
})
export class FascicoloComponent implements OnInit {

  @Input() fascicoloCorrente: Fascicolo;
  documenti: Documento[];
  fascicoli: Fascicolo[];

  constructor(private route: ActivatedRoute, private documentoService: DocumentoService, private fascicoloService: FascicoloService,
  private router: Router) { }

  getDocumenti(id: number): void {
    this.documentoService.getDocumenti().subscribe(documenti => this.documenti = documenti);
  }

  getFascicoli(): void {
    this.fascicoloService.getFascicoli()
      .subscribe(fascicoli => this.fascicoli = fascicoli);
  }

  getFascicolo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fascicoloService.getFascicolo(id)
      .subscribe(fascicolo => {
        this.fascicoloCorrente = fascicolo;
        this.fascicoli = fascicolo.fascicoli; this.documenti = fascicolo.documenti;
      });
  }

  /*getFascicolo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.fascicoloService.getFascicoloByName(name)
      .subscribe(fascicolo => {
        this.fascicoloCorrente = fascicolo;
        this.fascicoli = fascicolo.fascicoli; this.documenti = fascicolo.documenti;
      });
  }*/

  ngOnInit() {
    this.getFascicolo();
  }

  changeFascicolo(id: string) {
    this.router.navigate([id]);
  }

  openDocumento(id: string) {
    this.router.navigate(['detail', id]);
  }

}
