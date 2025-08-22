<script setup lang="ts">
const emit = defineEmits(['abortDelete', 'confirmDelete'])

</script>

<template>
    <div class="popup">
        <div>Are you sure you want to delete this post?</div>
        <span class="yes-or-no">
            <span
                class="mt-m align-l"
                v-on:click="emit('abortDelete')"
            ><a>No</a></span>
            <span
                class="mt-m align-r"
                v-on:click="emit('confirmDelete')"
            ><a>Yes</a></span>
        </span>
    </div>
</template>

<style scoped>
.align-l {
    text-align: left;
}
.align-r {
    text-align: right;
}
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
.yes-or-no {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    width: 50%;
}
</style>
