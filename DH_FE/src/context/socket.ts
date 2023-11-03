import { ReactNode } from "react";
import io from "socket.io-client";
import { createContext } from "react";

export const socket = io("http://localhost:4000")
export const SocketContext = createContext(null)
