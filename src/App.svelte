<script>
  import Background from "./lib/Background.svelte";
  import Heading from "./lib/Heading.svelte";
  import RoomButtons from "./lib/RoomButtons.svelte";

  let state = "home";
</script>

<Background />

{#if state === "home"}
  <div class="flex justify-center items-center flex-col h-screen">
    <Heading />
    <RoomButtons on:close={() => (state = "choose")} />
  </div>
{/if}
