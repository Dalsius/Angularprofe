import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => 
{
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

describe('Validar fx sumar', () =>
{
  let calculadora: CalculadoraComponent;
  let numero1;
  let numero2; 

  beforeEach(() => 
  {
  numero1 = 10;
  numero2 = 5;
  calculadora = new CalculadoraComponent();
  });

  it('Debe sumar dos numeros',() =>
  {  
    let resultado = calculadora.sumar(numero1,numero2);
    expect(resultado).toBe(15);
  });

  it('Debe ser mayor a 10',() =>
  {
    let resultado = calculadora.sumar(numero1,numero2);
    expect(resultado).toBeGreaterThan(10);
  });
});
