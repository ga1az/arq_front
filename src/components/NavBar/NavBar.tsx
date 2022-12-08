import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { Menu, AccountCircle } from "@mui/icons-material";
import { useState } from "react";
export interface NavBarInterface {}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Stack
      boxShadow={1}
      direction="row"
      textAlign="center"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <IconButton aria-label="menu" onClick={() => setIsMenuOpen(true)}>
        <Menu />
      </IconButton>
      <p>PymEats</p>
      <IconButton aria-label="account">
        <AccountCircle />
      </IconButton>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Favoritos" />
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
};

export default NavBar;
