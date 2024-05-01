import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="Facebook-clone">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header Section */}
          {/* In Header Section we need Search icon right of FB logo (using Material UI)*/}
          <Header />
          <div className="body">
            {/* SideBar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
