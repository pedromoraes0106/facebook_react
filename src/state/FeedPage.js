import React from "react";
import Header from "../Header";
import Sidebar from "../Siderbar";
import Feed from "../components/Feed/Feed"
import '../App.css';

export default function FeedPage() {
  return (
    <div>
      <Header />
      <div className="appBody">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
