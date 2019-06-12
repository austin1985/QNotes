<template>
    <sui-card v-if='"kind" in note && note.kind === "note@notebooks"'>
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
    methods: {

    }
}
</script>

