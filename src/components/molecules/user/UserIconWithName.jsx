import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <img height={160} width={160} src={image} alt={name} />
      <p>{name}</p>
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
