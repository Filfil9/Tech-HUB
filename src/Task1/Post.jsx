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
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Posts() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setSelectedPost(data))
        .catch((err) => console.error("Error fetching post:", err));
    } else {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setAllPosts(data))
        .catch((err) => console.error("Error fetching posts:", err));
    }
  }, [id]);

  const lastItemIndex = activePage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const paginatedPosts = allPosts.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ py: 5 }}>
        {!id ? (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              My Posts Board
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {paginatedPosts.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.body}
                      </Typography>
                    </CardContent>
                    <Button
                      variant="contained" 
                      size="small"
                      onClick={() => navigate(`/posts/${post.id}`)}
                      sx={{  mt: 2,
                            alignSelf: "center", 
                            color: "black",
                            '&:hover': {
                            backgroundColor: "#64b5f6",
                              },
                      }}
                    >
                      View Details
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box
              mt={5}
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
              <Typography>Page {activePage}</Typography>
              <Button
                variant="contained"
                onClick={() => setActivePage(activePage + 1)}
                disabled={lastItemIndex >= allPosts.length}
              >
                Next
              </Button>
            </Box>
          </>
        ) : selectedPost ? (
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              {selectedPost.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {selectedPost.body}
            </Typography>
            <Button variant="contained" onClick={() => navigate("/posts")}>
              ← Back to All Posts
            </Button>
          </Box>
        ) : (
          <Typography align="center">Loading...</Typography>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default Posts;
