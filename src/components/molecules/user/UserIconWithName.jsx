import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  //どのcontextかを引数に
  const { userInfo } = useContext(UserContext);
  //userInfoが存在していればuserInfo.isAdmin、存在していなければfalse
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log(userInfo);

  return (
    <SContainer>
      <img height={160} width={160} src={image} alt={name} />
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
  }
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
