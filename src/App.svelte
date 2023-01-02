<script lang="ts">
    import ChatInput from "./components/ChatInput.svelte";
    import type {OpenAIRequest} from "./model/OpenAIRequest";

    let openAiRequest: OpenAIRequest = {
        model: 'curie:ft-personal:lg-fine-tune-2023-01-02-14-47-02',
        prompt: '',
        temperature: 0,
        max_tokens: 50,
        presence_penalty: 0,
        frequency_penalty: 0
    }

    const handleMsgSent = (event) => {
        printMessage(event.detail.text, false);
        aiResponse(event.detail.text);
    }

    const aiResponse = async (msg: string) => {
        openAiRequest.prompt = msg;
        console.log(msg);
        console.log(openAiRequest);
        event.preventDefault();
        await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            body: JSON.stringify(openAiRequest),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer API_KEY'
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                printMessage(res.choices.at(0).text, true);
            })
            .catch(reason => {
                alert(reason);
            })
    }

    const printMessage = (msg: string, aiMsg: boolean) => {
        let newDiv = document.createElement('div');
        if(aiMsg) {
            newDiv.classList.add('bg-stone-500');
        }
        newDiv.innerHTML = `${msg}`;
        document.getElementById('chat').appendChild(newDiv);
    }

</script>

<div class="p-3 w-full" id="chat">
</div>
<ChatInput on:message={handleMsgSent}/>