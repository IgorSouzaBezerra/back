import IParseMailTemplateDTO from '../dtos/IParteMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
