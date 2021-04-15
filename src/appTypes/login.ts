type FaunaLoginSucessResponse = {
  ref: Object;
  ts: number;
  instance: Object;
  secret: string;
};

type FaunaLoginFailResponse = {
  position: Array<any>;
  code: string;
  description: string;
};

export type { FaunaLoginSucessResponse, FaunaLoginFailResponse };
