<script lang="ts">
    import {Input} from "flowbite-svelte";
    import {createEventDispatcher} from "svelte";

    let message: string = '';

    const dispatch = createEventDispatcher();

    function sendMessage() {
        dispatch('message', {
            text: message
        });
    }

</script>

<form class="fixed bottom-0 left-0 w-screen flex py-6 px-4" on:submit|preventDefault={sendMessage}>
    <Input type="text" class="ml-2" placeholder="Ask me something about Luca..." size="md" bind:value={message}/>
    <button type="submit" class="text-gray-500 dark:text-gray-400 ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
    </button>
</form>