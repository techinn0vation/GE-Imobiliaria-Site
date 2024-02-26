interface PropsText {
  text: string
}

export default function Text({ text }: PropsText) {
  return <p>{text}</p>
}
