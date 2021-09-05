import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import Pagination from "./component/Pagination";
import Card from "./component/Card";

function App() {
  const [posts, setPosts] = useState([]);

  // -------------------------------  how many data you want to print on per page---------------------------------------------
  const [showPostPerPage, setshowPostPerPage] = useState(3);
  // ----------------------------------------------------------------------------------------------------
  const [postStart, setpostStart] = useState({
    start: 0, //first data of first page
    end: showPostPerPage, //last data of first page
  });

  useEffect(() => {
    const FetchedData = async () => {
      await fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.data);
        });
    };

    FetchedData();
  }, []);
  console.log(posts);
  // ---------------------------- this fun send by props in to Pagination component and called there------------------
  //----------------and receved 2 prop , indexof first data and indexof last data of 1st page------------
  //it will change when click Next and Prev butoon--------------------------------
  const PaginationChangeFunction = (start, end) => {
    setpostStart({
      start: start,
      end: end,
    });
  };
  return (
    <>
      <Navbar />
      {/*   slice(0,3)  slice method work 0 to 3-1 it alwase ignore last index */}
      <div className="home__card">
        {posts.slice(postStart.start, postStart.end).map((post, i) => (
          <Card
            title={post.title}
            img={post.avatar}
            id={post.id}
            email={post.email}
            fname={post.first_name}
            lname={post.last_name}
            key={post.id}
          />
        ))}
      </div>

      <Pagination
        showPostPerPage={showPostPerPage}
        PaginationChangeFunction={PaginationChangeFunction}
        totalPost={posts.length} //pass the length of our data for calculateing how many page will seen
      />
    </>
  );
}

export default App;
