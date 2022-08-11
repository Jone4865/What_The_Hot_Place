import styled from "styled-components";
import { useNavigate } from "react-router-dom";

let Box = styled.div`
  width: 100%;
  background-color: black;
  height: 200px;
  color: hotpink;
  //가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Logo = styled.div`
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Logo onClick={() => navigate("/")}>What The Hot Place</Logo>
      </Box>
    </>
  );
}

export default Header;
