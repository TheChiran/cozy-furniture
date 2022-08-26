import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../constans/COLORS";

function Header() {
  return (
    <StyledHeader className="header">
      <Grid container columnSpacing={10}>
        <Grid item xs={4}>
          <Link to="/">
            Cozy{" "}
            <sup>
              <span>R</span>
            </sup>
          </Link>
        </Grid>
      </Grid>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 80px;
  border-bottom: 1px solid ${COLORS.borderColor};
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

export default Header;
