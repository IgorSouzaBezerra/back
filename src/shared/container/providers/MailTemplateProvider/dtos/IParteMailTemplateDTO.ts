interface ITemplateVariable {
  [key: string]: string | number;
}

export default interface IParteMailTemplateDTO {
  file: string;
  variables: ITemplateVariable;
}
