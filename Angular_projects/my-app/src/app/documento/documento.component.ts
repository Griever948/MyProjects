import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentoService } from '../documento.service';
import { Documento } from '../documento';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  @Input() documento: Documento;

  constructor(private route: ActivatedRoute,
    private documentoService: DocumentoService,
    private location: Location) { }

  ngOnInit() {
    this.getDocumento();
  }

  getDocumento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.documentoService.getDocumento(id)
      .subscribe(documento => this.documento = documento);
  }

  goBack(): void {
    this.location.back();
  }

}
