import { useGetUsersQuery } from "../data-access/api/posts/test";

export const Test = () => {
  const { data } = useGetUsersQuery({});

  console.log({ data });

  return <div>Hello users</div>;
};
