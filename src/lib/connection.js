import Peer from "peerjs";

export const peer = new Peer();
let conn;

export function estConn(c) {
  conn.on("open", function () {
    // Receive messages
    conn.on("data", function (data) {
      console.log("Received", data);
    });

    // Send messages
    conn.send("Hello!");
  });
}
