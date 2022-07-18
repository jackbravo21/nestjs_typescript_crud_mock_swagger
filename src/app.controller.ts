import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Get()
  get(): string {
    return "Acesse a documentação do Swagger pelo rota: http://localhost:3000/api/";
  }
}