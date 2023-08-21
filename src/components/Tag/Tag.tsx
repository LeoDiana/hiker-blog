import styles from './styles.ts'

interface TagProps {
  children: string
}

function Tag({ children }: TagProps) {
  return <div css={styles.tag({ text: children })}>{children}</div>
}

export default Tag
