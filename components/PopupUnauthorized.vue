<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
    <div class="popup">
        <div>You are not allowed to do this, sorry.</div>
        <div class="mt-m" v-on:click="emit('close')"><a>Close this.</a></div>
    </div>
</template>

<style scoped>
.popup {
    display: flex;
    flex-direction: column; /* Inner divs laid out vertically. */
    width: 50%;
    max-width: 300px;
    position: fixed;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 1.0rem;
    background-color: #a00000;
    z-layer: 1000;
    border-radius: 8px;
    /* Let's center this div. :D */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
