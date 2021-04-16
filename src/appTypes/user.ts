type UserContextProps = {
  username: string | null;
  email: string | null;
  token: string | null;
  // user: UserProps,
  // isLoading: boolean
};
type UserProps = {
  username: string | null;
  email: string | null;
  token: string | null;
};

export type { UserContextProps, UserProps };
