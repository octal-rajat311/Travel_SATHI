import React, { useEffect ,useState } from "react";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";


function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  const [OpenDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
    console.log(user?.picture)
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUSerProfile(codeResp),
    onError: (error) => console.log(error),
  });
  const GetUSerProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application.jsx",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 bg-[rgb(5,168,237)]">
      <img className="h-[47px] w-[180px]"src="/logo.svg" />
      <div>{user ? 
        <div className="flex items-center gap-2">
          <a href="/create-trip">
          <Button className ="rounded-full">Create Trip</Button>
          </a> 

          <a href="/my_trip">
          <Button className ="rounded-full">My Trips</Button>
          </a>
          
          <Popover>
            <PopoverTrigger><img src={user?.picture} className="h-[35px] w-[35px] rounded-full"/></PopoverTrigger>
            <PopoverContent>
              <a onClick={()=>{
                googleLogout()
                localStorage.clear()
                window.location.reload()
              }} className="cursor-pointer" href="/">LogOut</a>
            </PopoverContent>
          </Popover>   
        </div> 
      : <Button onClick={()=>setOpenDialog(true)}>Sign in</Button>}</div>

      <Dialog open={OpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="public\logo.svg" className="" />
              <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
              <h2 className="">Sign in to the App with Google securely</h2>
              <Button
                onClick={login}
                className="w-full mt-5 flex items-center gap-2">
                 <FcGoogle className="h-7 w-8" />
                 Sign in with Google
                
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default Header;
