import IParseMailTemplateDTO from '../../MailTemplateProvider/dtos/IParteMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  template: IParseMailTemplateDTO;
}
