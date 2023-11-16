import { createContext } from 'react';
import { Socket, io } from 'socket.io-client';
import { BASE_URL } from '../environment';
import { store } from '../redux';


export const socketIO = io(BASE_URL, {

  extraHeaders: {
    Authorization: `${store.getState().auth.accessToken}`,
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
