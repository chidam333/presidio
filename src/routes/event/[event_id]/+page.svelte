<script>
    export let data;
    let event = data.event_det[0];
    let start_date = `${event.start_date}`
    let end_date = `${event.end_date}`
</script>
<main class="bg-neutral-900 min-h-screen relative">
    <div class="content lg:mx-40  h-full">
        <div class="imgdalle h-60 overflow-y-hidden relative" title="Dall-e-2 img: Highly detailed Thanjavur painting of crowd attracted towards a  a builder demonstrating his product in expo ,set in modern day">
            <img src="/genEvent.jpeg" id="thanjavur" alt="Highly detailed Thanjavur painting of crowd attracted towards a  a builder demonstrating his product in expo ,set in modern day" class="absolute imgdalle w-full lg:-top-80 z-0">
            <div class="overlay h-full w-full absolute bg-gradient-to-b from-transparent to-neutral-900"></div>
        </div>
        <div class="det ml-6 lg:ml-12 mb-4">
            <h1 class="text-[wheat] font-extrabold text-4xl mt-8 mb-8">{event.event_name} <div class="desc text-base">{event.description}</div></h1>
            
            <div class="from text-[wheat] font-bold mt-6 text-xl mb-6"> venue : {event.address}</div>
            <div class="from text-[wheat] font-bold"> from : {start_date.slice(0,16)} {event.start_time.slice(0,5)}</div>
            <div class="from text-[wheat] font-bold"> to  &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{end_date.slice(0,16)} {event.end_time.slice(0,5)}</div>
            <div class="from text-[wheat] font-bold mt-6  mb-6"> Fee : {event.fees}</div>
        </div>
        <footer>
            <div class="ok fixed">
                <div class="con text-stone-700 font-medium ml-6 lg:ml-12">build using sveltekit, tailwind, postgres</div>
                <div class="con text-stone-700 font-medium ml-6 lg:ml-12">deployed on vercel & neon</div>
            </div>
        </footer>
</main>
