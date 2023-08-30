import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { styled } from 'styled-components'

const MarkdownWrapper = styled.div`
    max-width: 900px;
    margin: 85px auto 85px auto;
    position: relative;
    padding: 32px 32px;
    background-color: #fff;
    border-radius: 12px;
`

const Documentation = () => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        import(`../Readme.md`)
            .then((res) => {
                setMarkdown(res.default)
            })
            .catch((err) => console.log(err))
    })

    const showDocumentation = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                delay: 0.3,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
    }

    return (
        <motion.div initial="hidden" animate="animate" variants={showDocumentation} style={{ width: "100%" }}>
            <MarkdownWrapper>
                <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                </div>
            </MarkdownWrapper>
        </motion.div>
    )
}

export default Documentation
