type UserContextProps = {
  user: UserProps | null;
  isLoading: boolean;
};
type UserProps = {
  username: string | null;
  email: string | null;
  token: string | null;
};

export type { UserContextProps, UserProps };
