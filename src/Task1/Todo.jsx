// component/Todo.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List (from Posts)
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {todos.slice(0, 10).map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Todo;
