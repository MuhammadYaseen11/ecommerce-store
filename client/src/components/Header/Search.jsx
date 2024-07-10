import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 30%; /* Adjusted width */
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
  align-items: center; /* Center vertically */
  height: 40px; /* Adjust height to match the desired look */
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 10px; /* Adjusted padding */
  width: 100%;
  font-size: 14px; /* Adjusted font size */
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
  align-items: center; /* Center icon vertically */
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for Products, Brands and more"
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
