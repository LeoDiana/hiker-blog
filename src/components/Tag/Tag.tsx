import styles from './styles.ts'

interface Tag {
  children: string
}

function Tag({ children }: Tag) {
  return <div css={styles.tag({ text: children })}>{children}</div>
}

export default Tag
