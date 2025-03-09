import React from "react";
import { AuthProvider } from "../context/authContext";
import { UserProvider } from "../context/userContext";
import { TopicProvider } from "../context/topicContext"

const Provider = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <UserProvider>
            <TopicProvider>
            {children}
            </TopicProvider>
        </UserProvider>
      </AuthProvider>
    </div>
  );
};

export default Provider;
