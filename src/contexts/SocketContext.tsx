import {createContext} from 'react';
import {Socket, io} from 'socket.io-client';
import {BASE_URL} from '../environment';
import {ConversationI, RootState, store} from '../redux';
import {useSelector} from 'react-redux';

const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoiMjAyMy0xMC0xOSAyMDo0NCIsInV1aWQiOiJjZmY2NDkyZi02MzdiLTRmZDItODc0Yi0wZTNiNTMyZTIxZmMiLCJ1cGRhdGVkX2F0IjoiMjAyMy0xMC0xOSAyMDo0NCIsImRlbGV0ZWRfYXQiOm51bGwsImVtYWlsIjoicDNuaG94OTlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMmc3dnFVdzFwM2x3TmxNRlVXOGhlLnYwUlRBZm5IVHNmRHpQMjFoSUw1VC52SWo2NTVwaW0iLCJyb2xlcyI6InVzZXIiLCJmdWxsbmFtZSI6ImtoYWkiLCJwaG9uZSI6IjA5NDIzODQyIiwic3VtbWFyeSI6bnVsbCwiZ2VuZGVyIjoiZmFtYWxlIiwic3RhdHVzIjp0cnVlLCJkb2IiOiIyMDAzLTAzLTAzIiwiZGV2aWNlX3Rva2VuIjoiMTExMSIsImltYWdlX3VybCI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHp5Y2licHVjL2ltYWdlL3VwbG9hZC92MTY5Nzg4MzU3MC9hdmF0YXIvcDNuaG94OTklNDBnbWFpbC5jb20vZmlsZV96ejBqbGkuanBnIiwicHVibGljX2lkIjoiYXZhdGFyL3AzbmhveDk5QGdtYWlsLmNvbS9maWxlX3p6MGpsaSIsImlzVXBkYXRlIjp0cnVlLCJpc1Bhc3N3b3JkIjp0cnVlLCJpYXQiOjE2OTk4NzI3NTAsImV4cCI6MTY5OTg3NjM1MH0.JdjCPWlFC7AZW80v4oSnW2z3Zxs8_CgZzWABLYYx5Kk`;

export const socketIO = io(BASE_URL, {
  extraHeaders: {
    Authorization: `${accessToken}`,
  },
});

export const SocketContext = createContext<Socket>(socketIO);
export const SocketProvider = SocketContext.Provider;

// import React, {createContext, useContext, useEffect, useState} from 'react';
// import {useSelector} from 'react-redux';
// import {RootState} from '../redux/store';
// import {io, Socket} from 'socket.io-client';
// import {BASE_URL} from '../environment';

// interface SocketContextProps {
//   socket: Socket | null;
// }

// const SocketContext = createContext<SocketContextProps | undefined>(undefined);

// export const useSocket = () => {
//   const context = useContext(SocketContext);
//   if (!context) {
//     throw new Error('useSocket must be used within a SocketProvider');
//   }
//   return context;
// };

// const SocketProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const accessToken = useSelector((state: RootState) => state.auth.accessToken);

//   useEffect(() => {
//     // Kiểm tra xem có access token không
//     if (accessToken) {
//       // Tạo đối tượng socket với access token
//       const newSocket = io(BASE_URL, {
//         extraHeaders: {
//           Authorization: `${accessToken}`,
//         },
//       });
//       setSocket(newSocket);

//       // Lưu ý: Cần xử lý đóng socket khi component bị hủy
//       return () => {
//         newSocket.disconnect();
//       };
//     } else {
//       // Nếu không có access token, đóng socket (nếu có)
//       if (socket) {
//         socket.disconnect();
//         setSocket(null);
//       }
//     }
//   }, [accessToken]);

//   const contextValue: SocketContextProps = {
//     socket,
//   };

//   return (
//     <SocketContext.Provider value={contextValue}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketProvider;
