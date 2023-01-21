import { getListSubheaderUtilityClass } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";


const index = ({AuthContext}) => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const isAuth = async () => {
    try {
      const allCookies = document.cookie.split(";");
      for (let item of allCookies) {
        if (item.startsWith("token=")) {
          localStorage.setItem("token", item.slice(6));
          break;
        }
      }
      const res = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "jwt-token": localStorage.getItem("token"),
        },
      });
      const result = await res.json();
      console.log("result", result);
      result === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.log("Ohno, errro");
      console.error(err.message);
    }
  };
  
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json", "jwt-token": token },
      });
      const user = await res.json();
      const temp = JSON.stringify(user);
      console.log(user);
      localStorage.setItem("userInfo",temp);
      setUser(user);  
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCookie = (name) => {
    return document.cookie.split(";").some((c) => {
      return c.trim().startsWith(name + "=");
    });
  };

  const deleteCookie = (name, path, domain) => {
    if (getCookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  };

  const logout = async (cookieName) => {
    console.log("Inside logout function")
    deleteCookie("token");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    isAuth();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("auth/login");
    }
    getUser();
  }, [isAuthenticated]);

    return (
      <div class="relative bg-yellow-50 overflow-hidden max-h-screen">
      <header class="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-between">
            <div>
              <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
              </button>
            </div>
            <div class="text-2xl font-bold">Today's Plan</div>
            <div>
              <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
              </button>
            </div>
          </div>
        </div> 
      </header>
    
      <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div class="flex flex-col justify-between h-full">
          <div class="flex-grow">
            <div class="px-4 py-6 text-center border-b">
              <h1 class="text-xl font-bold leading-none"><span class="text-yellow-700">Task Manager</span> App</h1>
            </div>
            <div class="p-4">
              <ul class="space-y-1">
                <li>
                  <a href="javascript:void(0)" class="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                    </svg>Plan
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                    </svg>Task list
                  </a>
                </li>
                <li>
                  <button  class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                    </svg>Projects
                  </button>
                </li>
                <li>
                  <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>Tags
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="p-4">
            <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </button> <span onClick={logout} class="font-bold text-sm ml-2">Logout</span>
          </div>
        </div>
      </aside>
    
      <main class="ml-60 pt-16 max-h-screen overflow-auto">
        <div class="px-6 py-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-3xl p-8 mb-5">
              <h1 class="text-3xl font-bold mb-10">Messaging ID framework development for the marketing branch</h1>
              <div class="flex items-center justify-between">
                <div class="flex items-stretch">
                  <div class="text-gray-400 text-xs">Members<br />connected</div>
                  <div class="h-100 border-l mx-4"></div>
                  <div class="flex flex-nowrap -space-x-3">
                    <div class="h-9 w-9">
                      <img class="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                    </div>
                    <div class="h-9 w-9">
                      <img class="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-x-2">
                  <button type="button" class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                  </button>
                  <button type="button" class="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                    Open
                  </button>
                </div>
              </div>
    
              <hr class="my-10" />
    
              <div class="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 class="text-2xl font-bold mb-4">Stats</h2>
    
                  <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2">
                      <div class="p-4 bg-green-100 rounded-xl">
                        <div class="font-bold text-xl text-gray-800 leading-none">Good day, <br />Kristin</div>
                        <div class="mt-5">
                          <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                            Start tracking
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div class="font-bold text-2xl leading-none">20</div>
                      <div class="mt-2">Tasks finished</div>
                    </div>
                    <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div class="font-bold text-2xl leading-none">5,5</div>
                      <div class="mt-2">Tracked hours</div>
                    </div>
                    <div class="col-span-2">
                      <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                        <div class="font-bold text-xl leading-none">Your daily plan</div>
                        <div class="mt-2">5 of 8 completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">Your tasks today</h2>
    
                  <div class="space-y-4">
                    <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div class="flex justify-between">
                        <div class="text-gray-400 text-xs">Number 10</div>
                        <div class="text-gray-400 text-xs">4h</div>
                      </div>
                      <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                      <div class="text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>Deadline is today
                      </div>
                    </div>
                    <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div class="flex justify-between">
                        <div class="text-gray-400 text-xs">Grace Aroma</div>
                        <div class="text-gray-400 text-xs">7d</div>
                      </div>
                      <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                      <div class="text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>New feedback
                      </div>
                    </div>
                    <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div class="flex justify-between">
                        <div class="text-gray-400 text-xs">Petz App</div>
                        <div class="text-gray-400 text-xs">2h</div>
                      </div>
                      <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
}

export default index;