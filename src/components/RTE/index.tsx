import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'
import config from './config'

interface RteProps {
  setText?: any
  text?: string
}
function Rte({ text, setText }: RteProps) {
  const editor = useRef(null)
  return (
    <>
      <JoditEditor
        ref={editor}
        value={text || ''}
        config={config}
        onBlur={(newContent) => setText(newContent)}
      />
    </>
  )
}

export default Rte
