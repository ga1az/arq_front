import { Avatar, Chip, IconButton, InputBase, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Star, Search } from "@mui/icons-material";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const ItemLocal = () => {
  return (
    <Stack maxWidth="100%">
      <Stack
        sx={{
          backgroundImage:
            "url(https://cecinasllanquihue.cl/blog/wp-content/uploads/2019/07/OANV1L0-1200x600.jpg)",
          backgroundSize: "cover",
        }}
        padding={2}
        borderRadius={2}
        height="100px"
        justifyContent="space-between"
      >
        <Avatar sx={{ backgroundColor: "white", color: "black" }}>FR</Avatar>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Comida Rapida"
            sx={{ backgroundColor: "#404040", color: "white" }}
          />
          <Chip
            label="Cerrado"
            sx={{ backgroundColor: "#404040", color: "white" }}
          />
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row">
          <Star sx={{ color: "orange" }} />
          <p style={{ fontWeight: "bold", margin: "2px 0px 0px 3px" }}>
            Sandwich Don Sergio
          </p>
        </Stack>
        <p style={{ margin: "2px 0px" }}>Las lomas de san sebastian</p>
        <p style={{ margin: "2px 0px" }}>Horario 10:00 - 22:00</p>
      </Stack>
    </Stack>
  );
};

const Home = () => {
  return (
    <Stack>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "30px",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          height: "15px",
          marginTop: "10px",
        }}
      >
        <InputBase
          placeholder="Search..."
          style={{
            marginRight: "10px",
            flex: 1,
          }}
        />
        <IconButton aria-label="search">
          <Search />
        </IconButton>
      </div>
      <Stack marginTop="1rem" spacing={10}>
        <ItemLocal />
        <ItemLocal />
        <ItemLocal />
      </Stack>
    </Stack>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
