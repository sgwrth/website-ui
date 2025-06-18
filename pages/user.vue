<script setup lang="ts">
const store = useUserStore()
const getUser = getRequest()
const runtimeConfig = useRuntimeConfig()
const user: Ref<User> = ref({
	username: '',
	email: '',
	role: '',
	created: '',
	updated: '',
});
interface User {
	username: ''
	email: ''
	role: ''
	created: ''
	updated: ''
}

const months: string[] = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

function toDate(dateString, months, weekdays) {
	const timestamp = dateString.replace(' ', 'T')
	const date: Date = new Date(timestamp)
	const year = date.getFullYear()
	const month = months[date.getMonth()]
	const day = date.getDate()
	const weekday = weekdays[date.getDay()]
	return `${weekday}, ${month} ${day}, ${year}`
}

onMounted(async () => {
	const response: User[] = await getUser<User[]>('me')
	user.value.username = response[0].username
	user.value.email = response[0].email
	user.value.role = response[0].role
	user.value.created = response[0].created
	user.value.updated = response[0].updated
})
</script>

<template>
	<div class="main">
		<h1>User</h1>
		<table>
			<tbody>
				<tr>
					<td>Username:</td>
					<td>{{ user.username }}</td>
				</tr>
				<tr>
					<td>E-Mail:</td>
					<td>{{ user.email }}</td>
				</tr>
				<tr>
					<td>Role:</td>
					<td>{{ user.role }}</td>
				</tr>
				<tr>
					<td>Created:</td>
					<td>{{ toDate(user.created, months, weekdays) }}</td>
				</tr>
				<tr>
					<td>Last updated:</td>
					<td>{{ toDate(user.updated, months, weekdays) }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
td {
	padding-right: 1.0rem;
}
.mb-m {
	margin-bottom: 1.0rem;
}
</style>
