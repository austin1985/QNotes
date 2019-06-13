<template>
  <div id="app">
    <NoteEditor/>
    <Notes />
  </div>
</template>

<script>
import Notes from './components/components/Notes.vue'
import NoteEditor from './components/components/NoteEditor.vue'


export default {
  name: 'app',
  components: {
    Notes,
    NoteEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
