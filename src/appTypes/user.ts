type UserContextProps = {
  user: UserProps;
  isLoading: boolean;
  isLoggedIn: boolean;
};
type UserProps = {
  username: string | null;
  email: string | null;
  token: string | null;
};

export type { UserContextProps, UserProps };
