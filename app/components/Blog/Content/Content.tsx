'use client'

import ReactMarkdown from 'react-markdown'
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  content: string
}

const Content = ({ content }: Props) => {
  return (
    <ReactMarkdown
      className="prose max-w-screen-lg prose-pre:p-0 prose-img:w-full"
      linkTarget="_blank"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <div className="mockup-code pb-0 rounded-none">
              <SyntaxHighlighter
                {...props}
                style={oneDark}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  marginBottom: 0,
                  padding: '24px 32px',
                  borderRadius: 0,
                }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...props} className="bg-base-300 rounded-md px-1 font-medium">
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default Content
