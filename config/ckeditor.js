const CKEConfig = () => ({
    presets: {
        markdown:{
          field: {
              key: "markdown",
              value: "markdown",
              metadatas: {
                intlLabel: {
                  id: "ckeditor.preset.markdown.label",
                  defaultMessage: "Markdown output",
                },
              },
          },
          editorConfig:{
              placeholder: 'Markdown editor',
              plugins: [
                  globalThis.SH_CKE.Essentials,
                  globalThis.SH_CKE.Autoformat,
                  globalThis.SH_CKE.BlockQuote,
                  globalThis.SH_CKE.Bold,
                  globalThis.SH_CKE.Heading,
                  globalThis.SH_CKE.Image,
                  globalThis.SH_CKE.ImageCaption,
                  globalThis.SH_CKE.ImageStyle,
                  globalThis.SH_CKE.ImageToolbar,
                  globalThis.SH_CKE.ImageUpload, 
                  globalThis.SH_CKE.Indent,
                  globalThis.SH_CKE.Italic,
                  globalThis.SH_CKE.Link,
                  globalThis.SH_CKE.List,
                  globalThis.SH_CKE.MediaEmbed,
                  globalThis.SH_CKE.Paragraph,
                  globalThis.SH_CKE.Table,
                  globalThis.SH_CKE.TableToolbar,
                  globalThis.SH_CKE.SourceEditing, 
                  globalThis.SH_CKE.StrapiMediaLib,
                  globalThis.SH_CKE.StrapiUploadAdapter,
                  globalThis.SH_CKE.Markdown,
                  globalThis.SH_CKE.Code, 
                  globalThis.SH_CKE.CodeBlock,
                  globalThis.SH_CKE.TodoList,
                  globalThis.SH_CKE.Strikethrough,
                  globalThis.SH_CKE.HorizontalLine
              ],
              toolbar: {
                  items: [
                      'heading',
                      '|',
                      'bold',
                      'italic',
                      'strikethrough',
                      'link',
                      '|',
                      'bulletedList',
                      'numberedList',
                      'todoList',
                      '|',
                      'code',
                      'codeBlock',
                      '|',
                      'uploadImage',
                      'strapiMediaLib',
                      'blockQuote',
                      'horizontalLine',
                      '-',
                      'sourceEditing',
                      '|',
                      'outdent',
                      'indent',
                      '|',
                      'undo',
                      'redo'
                  ],
                  shouldNotGroupWhenFull: true
              },
              image: {
                  toolbar: [ 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative' ]
              },
              codeBlock: {
                  languages: [
                      { language: 'css', label: 'CSS' },
                      { language: 'html', label: 'HTML' },
                      { language: 'javascript', label: 'JavaScript' },
                      { language: 'php', label: 'PHP' }
                  ]
              },
          }
        },
    }
})