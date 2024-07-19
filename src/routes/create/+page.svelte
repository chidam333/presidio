<script>
	import { enhance } from '$app/forms';
    function handleSubmit(){
        window.location.href = '/'
    }
    export let form;
</script>
<main class="bg-zinc-800 min-h-screen grid place-items-center">
    <form method="POST" action="?/create" class="grid border-8 gap-4 border-amber-500 p-20" on:submit={()=>{handleSubmit}}>
        <input type="text" name="event_name" placeholder="Event Name" class="bg-transparent font-bold text-[wheat] focus:outline-none text-5xl mb-6" required>
        <div class="start text-amber-100 font-bold text-2xl gap-6 flex">start <input class="text-wheat text-center bg-zinc-600 rounded-2xl" type="date" name="start_date" id=""><input type="time" class="bg-zinc-600 rounded-2xl text-center" name="start_time" id=""></div>
        <div class="start text-amber-100 font-bold text-2xl flex gap-6">end&nbsp;&nbsp;<input class="text-wheat text-center bg-zinc-600 rounded-2xl" type="date" name="end_date" id="" required><input type="time" class="bg-zinc-600 rounded-2xl text-center" name="end_time" id="" required></div>
        <div class="address flex gap-6 text-[wheat] font-bold text-2xl"><div class="txt">addy</div><textarea class=" resize-y w-[25vw] bg-zinc-600 text-xl text-[wheat]" name="addy" id="addy" required></textarea></div>
        <div class="description text-[wheat] font-bold text-2xl flex gap-7">desc<input name="desc" class=" bg-zinc-600 w-[25vw]" type="text" required></div>
        <div class="options text-white text-2xl text-center font-bold">options</div>
        <div class="prepaid text-[wheat] text-2xl font-bold flex gap-6 mb-4">Fees<input name="fees" class="bg-zinc-600" type="text" required></div>
        <button type="submit" class="bg-zinc-50 rounded-md py-2 font-bold">Create Event</button>
    </form>
    <form action="?/see" method="POST">
        <button type="submit">SEEE</button>
    </form>
</main>