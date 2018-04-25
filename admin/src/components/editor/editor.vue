<template>
    <div class="kk-editor">
      <quill-editor class="kk-quill-editor"
                    ref="CourseEditor"
                   :content="content"
                   :options="editorOption"
                    @input="onEditorInput"
                   @blur="onEditorBlur($event)"
                   @focus="onEditorFocus($event)"
                   @ready="onEditorReady($event)">
      </quill-editor>
    </div>
</template>

<script type="text/ecmascript-6">
import hljs from 'highlight.js'

export default {
  name: 'editor',
  props: {
    content: {
      type: String
    }
  },
  data () {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    }
  },
  methods: {
    onEditorInput (content) {
      this.$emit('input', content)
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    }
  },
  computed: {
    editor () {
      return this.$refs.CourseEditor.quill
    }
  },
  mounted () {
    // console.log('this is my editor', this.editor)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kk-quill-editor
    height: 100%
</style>
