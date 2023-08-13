<script>
  import Peer from "peerjs";

  const peer = new Peer();

  let id = "";

  peer.on("open", function (ids) {
    console.log("My peer ID is: " + ids);
    id = ids;
  });

  peer.on("connection", function (conn) {
    console.log(conn);
  });

  let peerId = "";
</script>

{id}
<input type="text" bind:value={peerId} />
<button on:click={() => peer.connect(peerId)}>Connect</button>
