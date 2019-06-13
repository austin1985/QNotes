<template>
	<div class="editor">
		<sui-form>
			<sui-form-field>
				<label>Title</label>
				<input v-model="note.title" placeholder="Note Title">
			</sui-form-field>
			<sui-form-field>
				<label>Content</label>
				<textarea v-model="note.content" placeholder="Note Content"></textarea>
			</sui-form-field>
			<sui-form-field>
				<label>Notebook</label>
				<sui-dropdown placeholder="Notebook" selection :options="dropdown.options" v-model="note.notebook_id"/>
			</sui-form-field>
			<sui-button @click="addNote" type="submit">Save</sui-button>
		</sui-form>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "NoteEditor",
	data() {
		return {
			dropdown: {
				options:[{
					text: "NoteBook1",
					value: "123"
				},
				{
					text: "NoteBook2",
					value: "245"
				}]
			},
			note: {
				id: null,
				title: null,
				content: null,
				version_id: null,
				owner_id: "abc",
				cover_image: null,
				notebook_id: "222"
			}
		};
	},
	methods: {
		addNote(e) {
			e.preventDefault();
			let note = {...this.note}
			delete note.version_id
			delete note.id
			if (note.cover_image === null) {
				delete note.cover_image
			}
			if(note.content === null){
				delete note.content
			}
			console.log(note);
			axios.post(`http://172.31.6.5:7115/notebooks/${this.$config.notes.notebook_id}/notes`,{
				...note
			}).then(res => {
				// Add note to notes store
				console.log(res)
			}).catch(err=>console.log(err))

		},
		editNote() {},
		deleteNote() {}
	},
	created(){
		this.note.notebook_id = 123
		
	}
};
</script>

<style scoped>
.editor {
	width: 300px;
	margin: 20px;
	text-align: left;
}
</style>
