<script setup lang="ts">
const time = ref({
	hour: -1, // template checks for this, prevents showing placeholder hour and minute
	minute: 0,
})
const time2 = ref({})

const greetComputed = computed(() => greet(time.value.hour, time.value.minute))

function greet(hour: number, minute: number) {
	const minuteString = (minute < 10)? '0' + minute.toString() : minute.toString()
	if (3 < hour && hour < 12) {
		return `It's ${hour}:${minuteString}. Good morning.`
	}
	if (11 < hour && hour < 18) {
		return `It's ${hour}:${minuteString}. Good afternoon.`
	}
	if (17 < hour && hour < 23) {
		return `It's ${hour}:${minuteString}. Good evening.`
	}
	return `It's ${hour}:${minuteString}. Hello there, night owl. :)`
}

onMounted(() => {
	const date = new Date()
	time.value.hour = date.getHours()
	time.value.minute = date.getMinutes()
})
</script>

<template>
	<div class="main">
		<div class="header">Hello World</div>
		<div v-if="time.hour != -1" class="paragraph">{{ greetComputed }}</div>
		<li class="mb-m">
            <NuxtLink to="/tech-stack">Tech stack of this website</NuxtLink>
        </li>
	</div>
</template>

<style scoped>
</style>
