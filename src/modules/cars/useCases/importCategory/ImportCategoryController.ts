import { Response, Request } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private createCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.createCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
