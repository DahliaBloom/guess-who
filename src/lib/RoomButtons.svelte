<script>
  import { estConn, peer } from "./connection.js";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let popup = undefined;

  let peerID = "";

  peer.on("connection", (conn) => {
    estConn(conn);
    dispatch("close");
  });
</script>

<div class="flex gap-4 max-w-[50vw] text-[2vw]">
  <button on:click={() => (popup = "create")}>Create Room</button>
  <button on:click={() => (popup = "join")}>Join Room</button>
</div>

{#if popup !== undefined}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click|self={() => (popup = undefined)}
    class="absolute w-[90vw] max-w-3xl h-fit bg-bg border-primary border-2 rounded-lg p-6 flex flex-col items-center gap-2"
  >
    {#if popup === "create"}
      <input
        type="text"
        readonly
        value={peer.id}
        class="w-[80%] text-center text-[2.4vw] font-mono"
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg
        on:click={() => navigator.clipboard.writeText(peer.id)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="7%"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier">
          <path
            d="M21 16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V13.0002M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V12.0002M8 4.00195C5.82497 4.01406 4.64706 4.11051 3.87868 4.87889C3.11032 5.64725 3.01385 6.82511 3.00174 9"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path d="M9 17.5H15" stroke-width="1.5" stroke-linecap="round" />
          <path
            d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
            stroke-width="1.5"
          />
          <path
            d="M8 14H9M16 14H12"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M17 10.5H15M12 10.5H7"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g></svg
      >
      <p class="pt-[2%] text-[2vw] text-center">
        Please share this code with your friend 😊
      </p>
    {:else}
      <input
        bind:value={peerID}
        type="text"
        class="w-[80%] text-center text-[2.4vw] font-mono"
        on:keypress={(e) => {
          if (e.code === "Enter") {
            estConn(peer.connect(peerID));
            dispatch("close");
          }
        }}
      />
      <p class="pt-[2%] text-[2vw] text-center">
        Please enter your friend's code 😊
      </p>
    {/if}
  </div>
{/if}

<style>
  path {
    stroke: #eee;
  }
</style>
