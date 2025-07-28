import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";

// Helper component for displaying a single post
function Post({ post }) {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: 700,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

// Main component for fetching and displaying the posts board
function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const endpointUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(endpointUrl)
      .then((res) => res.json())
      .then((fetchedData) => {
        setAllPosts(fetchedData);
      })
      .catch((err) => {
        console.log("There was an error", err);
      });
  }, []);

  const lastItemIndex = activePage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const paginatedPosts = allPosts.slice(firstItemIndex, lastItemIndex);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ my: 4 }}>
          My Posts Board
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {paginatedPosts.map((post) => (
            <Grid item xs={12} sm={6} key={post.id}>
              {/* The Post component is now used directly from this file */}
              <Post post={post} />
            </Grid>
          ))}
        </Grid>

        <Box
          mt={5}
          mb={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Button
            variant="contained"
            onClick={() => setActivePage(activePage - 1)}
            disabled={activePage === 1}
          >
            Previous
          </Button>

          <Typography variant="body1">Page {activePage}</Typography>

          <Button
            variant="contained"
            onClick={() => setActivePage(activePage + 1)}
            disabled={lastItemIndex >= allPosts.length}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Posts;