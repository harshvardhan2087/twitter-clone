'use client';
import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import FeedCard from "./components/feedCard/FeedCard";
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "./clients/api";
import { verifyUserGoogleTokenQuery } from "./graphql/query/user";

export default function Home() {
  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if(!googleToken) return toast.error("Google token not found");

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, {token: googleToken})

    toast.success("verified success");
    console.log(verifyGoogleToken);

    
  
  }, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen mx-5">
        <div className="grid col-span-2 ">
          <Sidebar />
        </div>
        <div className="grid col-span-6 border-2 overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          
          
        </div>
        <div className="grid col-span-4">
          <div className="p-4 w-[250px] mx-4">
            <h1 className="text-center p-2">New to Twitter</h1>
          <GoogleLogin
          onSuccess={handleLoginWithGoogle}
           />

          </div>
        
        </div>
      </div>
    </div>
  );
}
