import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  const logo =
    "https://static-00.iconduck.com/assets.00/codepen-icon-256x256-et9eg0f0.png";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40, marginRight: 40 }} />
        <span style={{ fontSize: 40 }}>CodePen</span>
      </Toolbar>
    </Container>
  );
};

export default Header;
