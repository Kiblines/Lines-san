import { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/User";

import logo from "./logos-branding.png";

const StyledHeader = styled.div`
  height: 64px;
  background-color: #fff;
  display: flex;
  border-bottom: 2px solid #eeeeee;
  justify-content: space-between;
  text-align: centerd;
`;

const DivContext = styled.div`
  display: flex;
  padding: 5px 24px;
  p {
    padding: 5px 7px;
  }
`;

const Img = styled.img`
  width: 277px;
  height: 34px;
  margin: 15px;
`;

const Header = ({ data: user }) => {
  const { selectedEnv, setSelectedEnv, envs } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("UserEnv")) {
      setSelectedEnv(JSON.parse(localStorage.getItem("UserEnv")));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedEnv) {
      localStorage.setItem("UserEnv", JSON.stringify(selectedEnv));
    }
  }, [selectedEnv]);

  return (
    <StyledHeader className="header">
      <Img src={logo} className="Logosbranding" />
      <DivContext>
        {selectedEnv ? (
          <select
            value={selectedEnv}
            onChange={(e) => setSelectedEnv(e.target.value)}
          >
            {envs.map((env, index) => {
              return (
                <option value={env} key={index}>
                  {env}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}
        <p>{user.realm_roles[0]}</p>
      </DivContext>
    </StyledHeader>
  );
};

export default Header;
