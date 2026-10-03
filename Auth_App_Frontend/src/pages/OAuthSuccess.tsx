import useAuth from "@/auth/store";
import { Spinner } from "@/components/ui/spinner";
import { refreshToken } from "@/services/AuthService";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function OAuthSuccess(){

    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const changeLocalLoginData = useAuth((state) => state.changeLocalLoginData);
    const navigate = useNavigate();
    useEffect(() => {

        async function getAccessToken(){
            if(!isRefreshing){
                setIsRefreshing(true);

                try{
                    const responseLoginData = await refreshToken();

                    // login
                    changeLocalLoginData(
                        responseLoginData.accessToken,
                        responseLoginData.userDto,
                        true
                    );

                    toast.success("Login successful !!");
                    navigate("/dashboard");
                }catch(error){
                    toast.error("Error while login");
                    console.log(error);
                }finally{
                    setIsRefreshing(false);
                }
            }
        }

        getAccessToken();

    }, []);

    return (
        <div className="p-10 flex flex-col gap-3 justify-center items-center">
            <Spinner />
            <h1 className="text-2xl font-semibold">Please wait...</h1>
            <h1>Login success!!</h1>
        </div>
    );
}

export default OAuthSuccess;