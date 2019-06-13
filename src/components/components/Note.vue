<template>
	<sui-card class="card" v-if='"kind" in note && note.kind === "note@notebooks"'>
		<sui-image v-if='"cover_image" in note &&  note.cover_image !== null' :src="note.cover_image" class="card-image"/>
		<sui-card-content>
			<sui-card-header>{{note.title}}</sui-card-header>
			<sui-card-description>{{note.content}}</sui-card-description>
		</sui-card-content>
	</sui-card>
</template>

<script>
export default {
	name: "Note",
	props: ["note"],
	methods: {}
};
</script>

<style scoped>
	.card {
		height: 200px;
	}
	.card-image {
		height: 60px;
	}
</style>
