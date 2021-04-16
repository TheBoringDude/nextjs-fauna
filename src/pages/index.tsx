import { useUser } from '@lib/provider/hooks';
import DefaultLayout from '../components/layouts/Default';

export default function Home() {
  const user = useUser();
  // this is also possible
  // `const {user, isLoading, isLoggedIn} = useUser()`

  return (
    <DefaultLayout pageTitle="Home">
      <div>start coding!</div>

      <div>{JSON.stringify(user)}</div>
    </DefaultLayout>
  );
}
