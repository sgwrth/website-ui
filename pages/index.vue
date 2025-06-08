<script setup lang="ts">
const time = ref({
	hour: -1, // template checks for this, prevents showing placeholder hour and minute
	minute: 0,
})

const greetComputed = computed(() => greet(time.value.hour, time.value.minute))

function greet(hour: number, minute: number) {
	if (3 < hour && hour < 12) {
		return `It's ${hour}:${minute}. Good morning.`
	}
	if (11 < hour && hour < 18) {
		return `It's ${hour}${minute}. Good afternoon.`
	}
	if (17 < hour && hour < 23) {
		return `It's ${hour}:${minute}. Good evening.`
	}
	return `It's ${hour}:${minute}. Hello there, night owl. :)`
}

onMounted(() => {
	const date = new Date()
	time.value.hour = date.getHours()
	time.value.minute = date.getMinutes()
})
</script>

<template>
	<div class="main">
		<h1>Hello World</h1>
		<div v-if="time.hour != -1" class="paragraph">{{ greetComputed }}</div>		
		<li><NuxtLink to="/tech-stack">Tech stack of this website</NuxtLink></li>
	</div>
</template>

<style scoped>
</style>
