import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

function OAuth2Buttons(){
    return (
        <div className="space-y-3">
              <NavLink to={`${import.meta.env.VITE_BASE_URL || "http://localhost:8083"}/oauth2/authorization/google`} className={"block"}>
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full border-white/10 cursor-pointer bg-white/[0.04] text-white transition-all hover:border-white/20 hover:bg-white/[0.08]"
                    >
                        {/* Google SVG */}
                        <svg
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                            d="M21.35 12.23c0-.78-.07-1.53-.23-2.25H12v4.26h5.21a4.45 4.45 0 0 1-1.93 2.92v2.42h3.12c1.83-1.69 2.95-4.18 2.95-7.35Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 21.75c2.61 0 4.8-.86 6.4-2.35l-3.12-2.42c-.86.58-1.96.93-3.28.93-2.52 0-4.66-1.7-5.43-3.99H3.35v2.5A9.67 9.67 0 0 0 12 21.75Z"
                            fill="#34A853"
                        />
                        <path
                            d="M6.57 13.92a5.82 5.82 0 0 1 0-3.84v-2.5H3.35a9.76 9.76 0 0 0 0 8.84l3.22-2.5Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 6.09c1.42 0 2.7.49 3.7 1.45l2.78-2.78C16.8 3.17 14.61 2.25 12 2.25a9.67 9.67 0 0 0-8.65 5.33l3.22 2.5C7.34 7.79 9.48 6.09 12 6.09Z"
                            fill="#EA4335"
                        />
                        </svg>

                        Continue with Google
                    </Button>
              </NavLink>

              <NavLink to={`${import.meta.env.VITE_BASE_URL || "http://localhost:8083"}/oauth2/authorization/github`} className={"block"}>
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full border-white/10 cursor-pointer bg-white/[0.04] text-white transition-all hover:border-white/20 hover:bg-white/[0.08]"
                    >
                        <span className="mr-2">GitHub</span>
                        Continue with GitHub
                    </Button>
              </NavLink>
            </div>
    );
}

export default OAuth2Buttons;