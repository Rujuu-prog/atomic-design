import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Rujuu${val}`,
    image: "https://source.unsplash.com/IuJc2qh2TcA",
    email: "12345@example.com",
    phone: "000-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "httttt.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  // stateが存在していればstate.isadmin、存在していなければfalse
  const isAdmin = state ? state.isAdmin : false;
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard keys={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
