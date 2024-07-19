<script>
    export let data;
    const events = data.events;
    let event_search = events;
    $: val = "";
    function search(){
        console.log({val})
        let dup_val = val.toUpperCase()
        event_search = events.filter((x) => x.event_name.toUpperCase().includes(dup_val))
    }
</script>
<main class="bg-zinc-800 min-h-screen ">
    <div class="heading text-amber-200 font-bold grid grid-cols-3 gap-4 py-6 text-3xl">
        <a class="create text-center underline" href="/create">create</a>
        <span class="text-center">events.io</span>
        <input type="text" class="bg-zinc-600 mr-12" bind:value={val} on:input={()=>{search()}}>
    </div>
    <div class="cards-section mx-16">
        {#each event_search as event}
            <a href="/event/{event.event_id}" class="card h-16 bg-zinc-600 mt-10 border-4 border-black flex hover:scale-105 transform transition-transform duration-300">
                <div class="event-name basis-[70%] bg-zinc-950 text-amber-300 grid place-items-center text-2xl font-extrabold">{event.event_name}</div>
                <div class="other-details list-none px-10 text-amber-500 font-extrabold ">
                    <li>
                        {`${event.start_date}`.slice(0,15)}
                    </li>
                    <div class="line w-[100%] bg-black h-1"></div>
                    <li>{event.start_time}</li>
                </div>
            </a>
        {/each}
    </div>
</main>